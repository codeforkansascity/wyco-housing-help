import os

from flask import (Flask, jsonify, render_template)

# for retrieving db. move?
from helper.db import get_db

def create_app(test_config=None):

    # create and configure app
    app = Flask(__name__, instance_relative_config=True)


    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'helper.sqlite'),
    )

    if test_config is None:
        # load instance config if exists when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load test config if passed in
        app.config.from_mapping(test_config)

    # ensure that instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # return all properties
    @app.route('/', methods=["GET"])
    def listAll():
        db = get_db()
        parcel = db.execute(
            'SELECT parcel_py_ACRE FROM parcels WHERE OBJECTID = 1'
        ).fetchone()

        return render_template('test.html', parcel=parcel)

    from . import db
    db.init_app(app)

    return app