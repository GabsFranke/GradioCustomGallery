<script context="module" lang="ts">
	export { default as BaseGallery } from "./shared/HTMLGallery.svelte";
</script>

<script lang="ts">
	import type { Gradio, ShareData, SelectData } from "@gradio/utils";
	import { Block } from "@gradio/atoms";
	import type { LoadingStatus } from "@gradio/statustracker";
	import { StatusTracker } from "@gradio/statustracker";
	import { createEventDispatcher } from "svelte";
  	import HtmlGallery from "./shared/HTMLGallery.svelte";

	export let loading_status: LoadingStatus;
	export let show_label: boolean;
	export let label: string;
	export let elem_id = "";
	export let elem_classes: string[] = [];
	export let visible = true;
	export let value: string[] | null = null;
	export let container = true;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let columns: number | number[] | undefined = [2];
	export let rows: number | number[] | undefined = undefined;
	export let height: number | "auto" = "auto";
	export let preview: boolean;
	export let allow_preview = true;
	export let selected_index: number | null = null;
	export let object_fit: "contain" | "cover" | "fill" | "none" | "scale-down" =
		"cover";
	export let gradio: Gradio<{
		change: typeof value;
		select: SelectData;
		share: ShareData;
		error: string;
		prop_change: Record<string, any>;
	}>;

	const dispatch = createEventDispatcher();

	$: selected_index, dispatch("prop_change", { selected_index });
</script>

<Block
	{visible}
	variant="solid"
	padding={false}
	{elem_id}
	{elem_classes}
	{container}
	{scale}
	{min_width}
	allow_overflow={false}
	height={typeof height === "number" ? height : undefined}
>
	<StatusTracker
		autoscroll={gradio.autoscroll}
		i18n={gradio.i18n}
		{...loading_status}
	/>
	<HtmlGallery
		on:change={() => gradio.dispatch("change", value)}
		on:select={(e) => gradio.dispatch("select", e.detail)}
		on:share={(e) => gradio.dispatch("share", e.detail)}
		on:error={(e) => gradio.dispatch("error", e.detail)}
		{label}
		{value}
		{show_label}
		{columns}
		{rows}
		{height}
		{preview}
		{object_fit}
		{allow_preview}
		bind:selected_index
		i18n={gradio.i18n}
	/>
</Block>
