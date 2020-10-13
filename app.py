# import necessary libraries
from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import pandas as pd
import json



# create instance of Flask app
app = Flask(__name__)

# create route that renders index.html template
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/v1/<neighborhood>")
def api(neighborhood):
    database_path = "data/housingDB.sqlite"
    engine = create_engine(f"sqlite:///{database_path}")
    session = Session(engine)

    nbhd = neighborhood.replace("+", " ").upper()

    if nbhd == "ALL":
        with open('static/geo_data/Overview_price_age.json', 'r') as f:
            data = json.load(f)
        return data
    else:
        data = pd.read_sql(f"select Longitude, Latitude, Sale_Date, Sale_Price, Sale_Year, Age, Address from housing inner join tract_to_nb on housing.Census_Tract = tract_to_nb.tract where tract_to_nb.nb = '{nbhd}';", session.bind).dropna()
        processed_data = data.loc[data['Sale_Price']>1]
        return jsonify(processed_data.to_dict(orient='records'))


if __name__ == "__main__":
    app.run(debug=True)
