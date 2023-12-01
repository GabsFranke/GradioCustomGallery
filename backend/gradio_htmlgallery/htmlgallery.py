"""gr.Gallery() component."""

from __future__ import annotations

from typing import Any, Callable, List, Literal, Optional

from gradio_client.documentation import document, set_documentation_group

from gradio.components.base import Component
from gradio.data_classes import FileData, GradioModel, GradioRootModel
from gradio.events import Events

set_documentation_group("component")


class GalleryImage(GradioModel):
    image: FileData
    caption: Optional[str] = None


class GalleryData(GradioRootModel):
    root: List[GalleryImage]


@document()
class HTMLGallery(Component):
    """
    Used to display a list of images with html inside the same container as a gallery that can be scrolled through.
    Preprocessing: this component does *not* accept input.
    Postprocessing: expects a list of str with images as <img>, {list[str]} and displays them.

    Notes:
    If images wont load try adding "file/" to src, eg: <img src="file/{path}">
    If images still wont load add your path to 'allowed_paths' in .launch() arguments, eg: demo.launch(allowed_paths=["output"])
    """

    EVENTS = [Events.select]

    data_model = GalleryData

    def __init__(
        self,
        value: list[str] | Callable | None = None,
        *,
        label: str | None = None,
        every: float | None = None,
        show_label: bool | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        columns: int | tuple | None = 2,
        rows: int | tuple | None = None,
        height: int | float | None = None,
        allow_preview: bool = True,
        preview: bool | None = None,
        selected_index: int | None = None,
        object_fit: Literal["contain", "cover", "fill", "none", "scale-down"]
        | None = None,
    ):
        """
        Parameters:
            value: List of html(str) to display in the gallery by default. If callable, the function will be called whenever the app loads to set the initial value of the component.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            every: If `value` is a callable, run the function 'every' number of seconds while the client connection is open. Has no effect otherwise. Queue must be enabled. The event can be accessed (e.g. to cancel it) via this component's .load_event attribute.
            show_label: if True, will display label.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative width compared to adjacent Components in a Row. For example, if Component A has scale=2, and Component B has scale=1, A will be twice as wide as B. Should be an integer.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            columns: Represents the number of images that should be shown in one row, for each of the six standard screen sizes (<576px, <768px, <992px, <1200px, <1400px, >1400px). If fewer than 6 are given then the last will be used for all subsequent breakpoints
            rows: Represents the number of rows in the image grid, for each of the six standard screen sizes (<576px, <768px, <992px, <1200px, <1400px, >1400px). If fewer than 6 are given then the last will be used for all subsequent breakpoints
            height: The height of the gallery component, in pixels. If more images are displayed than can fit in the height, a scrollbar will appear.
            allow_preview: If True, images in the gallery will be enlarged when they are clicked. Default is True.
            preview: If True, Gallery will start in preview mode, which shows all of the images as thumbnails and allows the user to click on them to view them in full size. Only works if allow_preview is True.
            selected_index: The index of the image that should be initially selected. If None, no image will be selected at start. If provided, will set Gallery to preview mode unless allow_preview is set to False.
            object_fit: Not supported.
        """
        self.columns = columns
        self.rows = rows
        self.height = height
        self.preview = preview
        self.object_fit = object_fit
        self.allow_preview = allow_preview
        self.selected_index = selected_index

        super().__init__(
            label=label,
            every=every,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            value=value,
        )

    def postprocess(
        self,
        value: list[str] | None,
    ) -> list[str] | None:
        """
        Parameters:
            value: list of html (str), expects images as <img>.
        Returns:
            list of html (str).
        """
        return value

    def preprocess(self, payload: list[str] | None) -> list[str] | None:
        return payload

    def example_inputs(self) -> Any:
        return [
            "<div><img src='https://picsum.photos/1000/1600'><p>Hello world</p></div>",
            "<div><img src='https://picsum.photos/1200/1800'><p>Hello world</p></div>",
            "<div><p>Hello world</p><p>No image</p></div>",
            "<div><img src='https://picsum.photos/600/800'><p>Hello world</p></div>",
            "<div><p>Hello world</p><p>No image</p></div>",
            "<div><img src='https://picsum.photos/600/800'><p>Hello world</p></div>",
            "<div><p>Hello world</p><p>No image</p></div>",
            "<div><img src='https://picsum.photos/600/800'><p>Hello world</p></div>",
            "<div><p>Hello world</p><p>No image</p></div>","<div><img src='https://picsum.photos/600/800'><p>Hello world</p></div>",
            "<div><p>Hello world</p><p>No image</p></div>",
        ]
