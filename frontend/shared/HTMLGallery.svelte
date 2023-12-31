<script lang="ts">
	import { BlockLabel, Empty} from "@gradio/atoms";
	import { ModifyUpload } from "@gradio/upload";
	import type { SelectData } from "@gradio/utils";
	import { dequal } from "dequal";
	import { createEventDispatcher } from "svelte";
	import { tick } from "svelte";

	import { Image } from "@gradio/icons";
	import type { I18nFormatter } from "@gradio/utils";

	export let show_label = true;
	export let label: string;
	export let value: string[] | null = null;
	export let columns: number | number[] | undefined = [2];
	export let rows: number | number[] | undefined = undefined;
	export let height: number | "auto" = "auto";
	export let preview: boolean;
	export let allow_preview = true;
	export let object_fit: "contain" | "cover" | "fill" | "none" | "scale-down" =
		"cover";
	export let i18n: I18nFormatter;
	export let selected_index: number | null = null;

	const dispatch = createEventDispatcher<{
		change: undefined;
		select: SelectData;
	}>();

	// tracks whether the value of the gallery was reset
	let was_reset = true;

	$: was_reset = value == null || value.length == 0 ? true : was_reset;

	let _value: string[] | null = null;
	$: _value =
		value === null
			? null
			: value
	let prevValue: string[] | null = null;
		value;
	if (selected_index === null && preview && value?.length) {
		selected_index = 0;
	}
	let old_selected_index: number | null = selected_index;

	$: if (!dequal(prevValue, value)) {
		// When value is falsy (clear button or first load),
		// preview determines the selected image
		if (was_reset) {
			selected_index = preview && value?.length ? 0 : null;
			was_reset = false;
			// Otherwise we keep the selected_index the same if the
			// gallery has at least as many elements as it did before
		} else {
			selected_index =
				selected_index !== null &&
				value !== null &&
				selected_index < value.length
					? selected_index
					: null;
		}
		dispatch("change");
		prevValue = value;
	}

	$: previous =
		((selected_index ?? 0) + (_value?.length ?? 0) - 1) % (_value?.length ?? 0);
	$: next = ((selected_index ?? 0) + 1) % (_value?.length ?? 0);

	function handle_preview_click(event: MouseEvent): void {
		const element = event.target as HTMLElement;
		const x = event.clientX;
		const width = element.offsetWidth;
		const centerX = width / 2;

		if (x < centerX) {
			selected_index = previous;
		} else {
			selected_index = next;
		}
	}

	function on_keydown(e: KeyboardEvent): void {
		switch (e.code) {
			case "Escape":
				e.preventDefault();
				selected_index = null;
				break;
			case "ArrowLeft":
				e.preventDefault();
				selected_index = previous;
				break;
			case "ArrowRight":
				e.preventDefault();
				selected_index = next;
				break;
			default:
				break;
		}
	}

	$: {
		if (selected_index !== old_selected_index) {
			old_selected_index = selected_index;
			if (selected_index !== null) {
				dispatch("select", {
					index: selected_index,
					value: _value?.[selected_index]
				});
			}
		}
	}

	$: if (allow_preview) {
		scroll_to_img(selected_index);
	}

	let el: HTMLButtonElement[] = [];
	let container_element: HTMLDivElement;

	async function scroll_to_img(index: number | null): Promise<void> {
		if (typeof index !== "number") return;
		await tick();

		if (el[index] === undefined) return;

		el[index]?.focus();

		const { left: container_left, width: container_width } =
			container_element.getBoundingClientRect();
		const { left, width } = el[index].getBoundingClientRect();

		const relative_left = left - container_left;

		const pos =
			relative_left +
			width / 2 -
			container_width / 2 +
			container_element.scrollLeft;

		if (container_element && typeof container_element.scrollTo === "function") {
			container_element.scrollTo({
				left: pos < 0 ? 0 : pos,
				behavior: "smooth"
			});
		}
	}

	function hasImg(html) {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		return doc.querySelector('img') !== null;
  	}

  	function extractImg(html) {
		const doc = new DOMParser().parseFromString(html, 'text/html');
		const imgElement = doc.querySelector('img');
		return imgElement ? imgElement.outerHTML : '';
  	}

	let numThumbnails = _value ? _value.length : 0;

	$: {
		numThumbnails = _value ? _value.length : 0;
	}

	let justifyContentThumbnails = 'justify-center'; // default class

	$: {
		// Recalculate justifyContentClass whenever numThumbnails changes
		justifyContentThumbnails = numThumbnails < 14 ? 'justify-center' : 'justify-space-between';
	}

	let client_height = 0;
	let window_height = 0;
</script>

<svelte:window bind:innerHeight={window_height} />

{#if show_label}
	<BlockLabel {show_label} Icon={Image} label={label || "Gallery"} />
{/if}
{#if value === null || _value === null || _value.length === 0}
	<Empty unpadded_box={true} size="large"><Image /></Empty>
{:else}
	{#if selected_index !== null && allow_preview}
		<button on:keydown={on_keydown} class="preview">
			<div class="icon-buttons">
				<ModifyUpload
					{i18n}
					absolute={false}
					on:clear={() => (selected_index = null)}
				/>
			</div>
			<button
				class="image-button"
				on:click={(event) => handle_preview_click(event)}
				style="height: 100% - {_value[selected_index]
					? '80px'
					: '60px'})"
				aria-label="detailed view of selected content"
			>
				{@html _value[selected_index]}
			</button>
			<div
				bind:this={container_element}
				class="thumbnails scroll-hide {justifyContentThumbnails}"
				data-testid="container_el"
			>
				{#each _value as divs, i}
					<button
						bind:this={el[i]}
						on:click={() => (selected_index = i)}
						class="thumbnail-item thumbnail-small"
						class:selected={selected_index === i}
						aria-label={"Thumbnail " + (i + 1) + " of " + _value.length}
					>
						{#if hasImg(divs)}
							{@html extractImg(divs)}
						{:else}
							{i}
						{/if}
					</button>
				{/each}
			</div>
		</button>
	{/if}

	<div
		bind:clientHeight={client_height}
		class="grid-wrap"
		class:fixed-height={!height || height == "auto"}
	>
		<div
			class="grid-container"
			style="--grid-cols:{columns}; --grid-rows:{rows}; --object-fit: {object_fit}; height: {height};"
			class:pt-6={show_label}
		>
			{#each _value as entry, i}
				<button
					class="thumbnail-item thumbnail-lg"
					class:selected={selected_index === i}
					on:click={() => (selected_index = i)}
					aria-label={"Thumbnail " + (i + 1) + " of " + _value.length}
				>
					{@html entry}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	.preview {
		display: flex;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		flex-direction: column;
		z-index: var(--layer-2);
		backdrop-filter: blur(8px);
		background: var(--background-fill-primary);
		height: var(--size-full);
		overflow-y: auto;
	}

	.fixed-height {
		min-height: var(--size-80);
		max-height: 55vh;
	}

	@media (--screen-xl) {
		.fixed-height {
			min-height: 450px;
		}
	}

	.image-button {
		height: calc(100% - 60px);
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.thumbnails {
		display: flex;
		position: absolute;
		bottom: 0;
		align-items: center;
		padding-left: 10px;
		padding-right: 10px;
		gap: var(--spacing-lg);
		min-width: 100%;
		width: var(--size-full);
		height: var(--size-14);
		overflow-x: scroll;
	}

	.thumbnails.justify-center {
		justify-content: center;
	}

	.thumbnails.justify-space-between {
		justify-content: space-between;
	}

	.thumbnail-item {
		--ring-color: transparent;
		position: relative;
		box-shadow:
			0 0 0 2px var(--ring-color),
			var(--shadow-drop);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--button-small-radius);
		background: var(--background-fill-secondary);
		aspect-ratio: var(--ratio-square);
		width: var(--size-full);
		height: var(--size-full);
		overflow: clip;
	}

	.thumbnail-item:hover {
		--ring-color: var(--color-accent);
		filter: brightness(1.1);
	}

	.thumbnail-item.selected {
		--ring-color: var(--color-accent);
	}

	.thumbnail-small {
		flex: none;
		transform: scale(0.9);
		transition: 0.075s;
		width: var(--size-9);
		height: var(--size-9);
	}

	.thumbnail-small.selected {
		--ring-color: var(--color-accent);
		transform: scale(1);
		border-color: var(--color-accent);
	}

	.grid-wrap {
		position: relative;
		padding: var(--size-2);
		height: var(--size-full);
		overflow-y: scroll;
	}

	.grid-container {
		display: grid;
		position: relative;
		grid-template-rows: repeat(var(--grid-rows), minmax(100px, 1fr));
		grid-template-columns: repeat(var(--grid-cols), minmax(100px, 1fr));
		grid-auto-rows: minmax(100px, 1fr);
		gap: var(--spacing-lg);
	}

	.icon-buttons {
		display: flex;
		position: absolute;
		right: 0;
	}

</style>
