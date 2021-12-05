import datetime
import sqlite3
from pathlib import Path

from predict import detect
from query_db import execute, find_one, find_all

DATABASE = './database.db'


def make_dicts(cursor, row):
    return dict((cursor.description[idx][0], value)
                for idx, value in enumerate(row))


def get_db():
    db = sqlite3.connect(DATABASE, detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES)
    db.row_factory = make_dicts

    return db


def add_dataset(name, path):
    db = get_db()

    detect.run(db=db, dataset_name=name, agnostic_nms=False, augment=False, classes=None, conf_thres=0.2, device='',
               dnn=False,
               exist_ok=True,
               half=False, hide_conf=False, hide_labels=False, imgsz=[1280, 1280], iou_thres=0.45,
               max_det=50, name='exp', nosave=True, project=Path('static/detect'), save_conf=False,
               save_crop=False, save_txt=False, source=path, update=False, view_img=False,
               visualize=False)

    stat = find_one(db,
                    "SELECT sum(count) as count, avg(conf) as conf, count(*) as images FROM images WHERE datasetId = ? AND status = ? GROUP BY datasetId",
                    (name, 'predicted'))

    execute(db, "UPDATE datasets SET status = ?, conf = ?, count = ?, images = ? WHERE name = ?",
            ('predicted', stat['conf'], stat['count'], stat['images'], name))


def get_datasets(db):
    return find_all(db, "SELECT * FROM datasets")


def get_dataset(db, dataset_id):
    return find_one(db, "SELECT * FROM datasets WHERE name = ?", (dataset_id,))


def get_dataset_images(db, dataset_id):
    return find_all(db, "SELECT * FROM images WHERE datasetId = ?", (dataset_id,))
