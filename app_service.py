import datetime
from pathlib import Path

from predict import detect
from query_db import execute, find_one, find_all


def add_dataset(db, name, path):
    execute(db, 'INSERT INTO datasets (name, path, status, date) VALUES (?, ?, ?, ?)',
            (name, path, 'loaded', datetime.datetime.now()))

    detect.run(db=db, dataset_name=name, agnostic_nms=False, augment=False, classes=None, conf_thres=0.2, device='',
               dnn=False,
               exist_ok=True,
               half=False, hide_conf=False, hide_labels=False, imgsz=[1280, 1280], iou_thres=0.45,
               max_det=50, name='exp', nosave=False, project=Path('static/detect'), save_conf=False,
               save_crop=False, save_txt=False, source=path, update=False, view_img=False,
               visualize=False)

    stat = find_one(db,
                    "SELECT sum(count) as count, avg(conf) as conf FROM images WHERE datasetId = ? AND status = ? GROUP BY datasetId",
                    (name, 'predicted'))

    execute(db, "UPDATE datasets SET status = ?, conf = ?, count = ? WHERE name = ?",
            ('predicted', stat['conf'], stat['count'], name))


def get_datasets(db):
    return find_all(db, "SELECT * FROM datasets")


def get_dataset(db, dataset_id):
    return find_one(db, "SELECT * FROM datasets WHERE name = ?", (dataset_id,))


def get_dataset_images(db, dataset_id):
    return find_all(db, "SELECT * FROM images WHERE datasetId = ?", (dataset_id,))
