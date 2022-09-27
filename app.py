
from flask import Flask, render_template, request, url_for, flash, redirect, send_from_directory

app = Flask(__name__)
app.jinja_env.auto_reload = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route('/', methods=('GET', 'POST'))
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(threaded=True, debug=False)
s