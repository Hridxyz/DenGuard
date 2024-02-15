from flask import Flask, render_template, send_file
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)

# Load your dataframes
dengue_df = pd.read_csv("./dengue_data/dengue_india.csv")
vaccine_df = pd.read_csv("./dengue_data/dengue_vaccine_statewise.csv")


# Data analysis and plotting functions
def generate_active_cases_chart():
    # Example: Active Cases chart
    fig, ax = plt.subplots()
    ax.plot(dengue_df["Date"], dengue_df["Active_Cases"], label="Active Cases")
    ax.set_title("Dengue Active Cases Over Time")
    ax.set_xlabel("Date")
    ax.set_ylabel("Active Cases")
    ax.legend()

    # Save the chart to a BytesIO object
    chart_buffer = BytesIO()
    plt.savefig(chart_buffer, format="png")
    chart_buffer.seek(0)
    plt.close()

    return chart_buffer


def generate_vaccination_chart():
    # Example: Vaccination chart
    fig, ax = plt.subplots()
    ax.bar(
        vaccine_df["State"],
        vaccine_df["Total Individuals Vaccinated"],
        label="Total Vaccination",
    )
    ax.set_title("Vaccination Across States")
    ax.set_xlabel("State")
    ax.set_ylabel("Total Individuals Vaccinated")
    ax.legend()

    # Save the chart to a BytesIO object
    chart_buffer = BytesIO()
    plt.savefig(chart_buffer, format="png")
    chart_buffer.seek(0)
    plt.close()

    return chart_buffer


# Routes
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/stats")
def stats():
    # Generate charts
    active_cases_chart = generate_active_cases_chart()
    vaccination_chart = generate_vaccination_chart()

    # Pass the charts to the template
    return render_template(
        "stats.html",
        active_cases_chart=active_cases_chart,
        vaccination_chart=vaccination_chart,
    )


if __name__ == "__main__":
    app.run(debug=True)
