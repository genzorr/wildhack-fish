from pathlib import Path
from predict import detect
from flask import Flask, render_template
import os
import sys

static_folder = "static/frontend/static"
template_folder = "static/frontend"

if getattr(sys, 'frozen', False):
    template_folder = os.path.join(sys._MEIPASS, template_folder)
    static_folder = os.path.join(sys._MEIPASS, static_folder)
    app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)
else:
    app = Flask(__name__, static_folder=static_folder, template_folder=template_folder)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/<path:path>')
def subpage(path):
    return render_template(path)


@app.route('/detect')
def predict():
    return detect.run(agnostic_nms=False, augment=False, classes=None, conf_thres=0.2, device='', dnn=False,
                      exist_ok=True,
                      half=False, hide_conf=False, hide_labels=False, imgsz=[1280, 1280], iou_thres=0.45,
                      max_det=50, name='exp', nosave=False, project=Path('static/detect'), save_conf=False,
                      save_crop=False, save_txt=False, source=Path('data'), update=False, view_img=False,
                      visualize=False)


if __name__ == '__main__':
    app.run()
