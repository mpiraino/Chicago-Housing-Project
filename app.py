# import necessary libraries
from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import pandas as pd

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
        data = pd.read_sql("select Sale_Price, Age, nb from housing inner join tract_to_nb on housing.Census_Tract = tract_to_nb.tract;", session.bind)
        overview = data.groupby('nb').agg({
                                        'Sale_Price':  'mean',
                                        'Age':'mean'
                                        })
        return jsonify(overview.to_dict())
    else:
        data = pd.read_sql(f"select Longitude, Latitude, Sale_Price, Sale_Year, Bedrooms, Full_Baths from housing inner join tract_to_nb on housing.Census_Tract = tract_to_nb.tract where tract_to_nb.nb = '{nbhd}';", session.bind).dropna()
        return jsonify(data.to_dict(orient='records'))


if __name__ == "__main__":
    app.run(debug=True)
