from flask import Flask, render_template

app = Flask(__name__, static_folder="./static/frontend/static", template_folder="./static/frontend")


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<path:path>')
def subpage(path):
    return render_template(path + ".html")


if __name__ == '__main__':
    app.run()
