
import gradio as gr
from gradio_htmlgallery import HTMLGallery


example = HTMLGallery().example_inputs()

with gr.Blocks() as demo:
    with gr.Row():
        HTMLGallery(label="Blank"),  # blank component
        HTMLGallery(value=example, label="Populated"),  # populated component


demo.launch()
