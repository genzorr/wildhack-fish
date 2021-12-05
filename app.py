import sqlite3
import threading
import datetime

from flask_cors import CORS

import app_service
from flask import Flask, render_template, g, request, Response, jsonify
import os
import sys

from query_db import execute

DATABASE = './database.db'

static_folder = "frontend/out/static"
template_folder = "frontend/out"

if getattr(sys, 'frozen', False):
    template_folder = os.path.join(sys._MEIPASS, template_folder)
    static_folder = os.path.join(sys._MEIPASS, static_folder)
    app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)
else:
    app = Flask(__name__, static_folder=static_folder, template_folder=template_folder)

CORS(app)


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE, detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES)
        db.row_factory = make_dicts

    return db


def make_dicts(cursor, row):
    return dict((cursor.description[idx][0], value)
                for idx, value in enumerate(row))


def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()


init_db()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/dataset')
def get_dataset():
    name = request.args.get('name')
    return jsonify(app_service.get_dataset(get_db(), name))


@app.route('/dataset/images')
def get_dataset_images():
    name = request.args.get('name')

    return jsonify(app_service.get_dataset_images(get_db(), name))


@app.route('/<path:path>')
def subpage(path):
    return render_template(path)


@app.route('/datasets', methods=["PUT"])
def add_dataset():
    request_data = request.get_json()
    name, path = request_data['name'], request_data['path']
    try:
        execute(get_db(), 'INSERT INTO datasets (name, path, status, date) VALUES (?, ?, ?, ?)',
                (name, path, 'loaded', datetime.datetime.now()))

        thread = threading.Thread(target=app_service.add_dataset,
                                  args=(name, path), daemon=True)
        thread.start()
    except sqlite3.IntegrityError as e:
        print(e)
        return Response(status=400)

    return Response(status=200)


@app.route('/datasets')
def get_datasets():
    return jsonify(app_service.get_datasets(get_db()))


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


if __name__ == '__main__':
    app.run(host='0.0.0.0')
