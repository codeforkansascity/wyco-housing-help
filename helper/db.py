import sqlite3
import os
import click
from flask import current_app, g
from flask.cli import with_appcontext
import pandas as pd
import requests
# use json for import instead of csv?
# import csv
    
# establish connection to database
def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row


    return g.db

# close connection to database
def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

# don't need since populate creates a table?
"""
def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))
"""

# populates sqlite table with data from csv file
def populate():
    # connect to database
    conn = get_db()
    # c = conn.cursor()
    # read csv file into dataframe
    with open('./LandBankRankingUpdate.csv') as f:
        parcel_dataframe = pd.read_csv(f)
    # write dataframe into sqlite table
    parcel_dataframe.to_sql('parcels.sqlite', conn, if_exists= 'replace', index='OBJECTID')

# fetch data from gov resource, and store it into sqlite db
# TODO: currently getting errors parsing json into dataframe. need to correct "AttributeError: 'str' object has no attribute 'values'"
"""def update_db():
    
    # fetch json of parcel data
    r = requests.get(
        'https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
        )

    # store response in tmp
    if './helper/tmp/parcels.json':
        os.remove('./helper/tmp/parcels.json')
    with open('./helper/tmp/parcels.tmp.json', 'w') as f:
        f.write(r.text)
    os.rename('./helper/tmp/parcels.tmp.json', './helper/tmp/parcels.json')

    # import json data into dataframe using pandas
    with open('./helper/tmp/parcels.json', 'r') as f:
        normalized = pd.json_normalize(f)
        parcel_dataframe = pd.read_json(normalized)
        print(parcel_dataframe)

    # store dataframe into sqlite database
    # parcel_dataframe.to_sql("parcels", g.db, if_exists="update")
"""

# not necessary? need to review
"""
@click.command('init-db')
@with_appcontext
def init_db_command():
    init_db()
    click.echo('Database initialized')
"""

@click.command('populate')
@with_appcontext
def populate_command():
    populate()
    click.echo('Database populated')

# update command
# TODO: currently non functioning. need to correct errors importing JSON with pandas
@click.command('update-db')
@with_appcontext
def update_db_command():
    update_db()
    click.echo('Database updated')

# register with flask app
def init_app(app):
    app.teardown_appcontext(close_db)
    # app.cli.add_command(init_db_command)
    app.cli.add_command(update_db_command)
    app.cli.add_command(populate_command)