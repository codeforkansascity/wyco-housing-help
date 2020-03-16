import os

from flask import Flask
import requests

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

    # fetch parcel data
    @app.route('/')
    def updateParcels():
        r = requests.get(
        'https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
        )

        if './helper/tmp/parcels.json':
            os.remove('./helper/tmp/parcels.json')

        with open('./helper/tmp/parcels.tmp.json', 'w') as f:
            f.write(r.text)

        os.rename('./helper/tmp/parcels.tmp.json', './helper/tmp/parcels.json')
        return "updated!"
    # return all properties
    @app.route('/all')
    def listAll():
        with open('./helper/tmp/parcels.json', 'r') as f:
            data = f.read()
            return data

    return app