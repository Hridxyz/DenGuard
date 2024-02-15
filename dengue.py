import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
from plotly.subplots import make_subplots
from datetime import datetime

dengue_df = pd.read_csv("./dengue_india.csv")
dengue_df.head(10)

dengue_df.info()

dengue_df.describe()

vaccine_df = pd.read_csv("./dengue_vaccine_statewise.csv")

vaccine_df.head(7)

dengue_df.drop(
    ["Sno", "Time", "ConfirmedIndianNational", "ConfirmedForeignNational"],
    inplace=True,
    axis=1,
)

dengue_df.head()

dengue_df["Date"] = pd.to_datetime(dengue_df["Date"], format="%Y-%m-%d")

dengue_df.head()

# Active Cases
dengue_df["Active_Cases"] = dengue_df["Confirmed"] - (
    dengue_df["Cured"] + dengue_df["Deaths"]
)
dengue_df.tail()

statewise = pd.pivot_table(
    dengue_df,
    values=["Confirmed", "Deaths", "Cured"],
    index="State/UnionTerritory",
    aggfunc="max",
)
statewise["Recovery Rate"] = statewise["Cured"] * 100 / statewise["Confirmed"]
statewise["Mortality Rate"] = statewise["Deaths"] * 100 / statewise["Confirmed"]
statewise = statewise.sort_values(by="Confirmed", ascending=False)
statewise.style.background_gradient(cmap="cubehelix")

# Top 10 Active Cases States
top_10_active_cases = (
    dengue_df.groupby(by="State/UnionTerritory")
    .max()[["Active_Cases", "Date"]]
    .sort_values(by=["Active_Cases"], ascending=False)
    .reset_index()
)

fig = plt.figure(figsize=(16, 9))

plt.title("Top 10 states with most active cases in India", size=25)

ax = sns.barplot(
    data=top_10_active_cases.iloc[:10],
    y="Active_Cases",
    x="State/UnionTerritory",
    linewidth=2,
    edgecolor="red",
)

# Top states with highest deaths

top_10_deaths = (
    dengue_df.groupby(by="State/UnionTerritory")
    .max()[["Deaths", "Date"]]
    .sort_values(by=["Deaths"], ascending=False)
    .reset_index()
)
fig = plt.figure(figsize=(18, 5))
plt.title("Top 10 states with most deaths", size=25)
ax = sns.barplot(
    data=top_10_deaths.iloc[:12],
    y="Deaths",
    x="State/UnionTerritory",
    linewidth=2,
    edgecolor="black",
)
plt.xlabel("States")
plt.ylabel("Total Death Cases")
plt.show()

# Growth Trend

fig = plt.figure(figsize=(12, 6))
ax = sns.lineplot(
    data=dengue_df[
        dengue_df["State/UnionTerritory"].isin(
            ["Maharashtra", "Karnataka", "Kerela", "Tamil Nadu", "Uttar Pradesh"]
        )
    ]
)
ax.set_title("Top 5 affected States in India", size=16)
plt.xlabel("Date")
plt.ylabel("Active_Cases")
plt.show()

vaccine_df.head()
vaccine_df.rename(columns={"Updated On": "Vaccine_Date"}, inplace=True)
vaccine_df.head(10)
vaccine_df.info()
vaccine_df.isnull().sum()

vaccination = vaccine_df.drop(
    columns=[
        "Sputnik V (Doses Administered)",
        "AEFI",
        "18-44 Years (Doses Administered)",
        "45-60 Years (Doses Administered)",
        "60+ Years (Doses Administered)",
    ],
    axis=1,
)
vaccination.head()

# Male vs Female Vaccination

male = vaccination["Male(Individuals Vaccinated)"].sum()
female = vaccination["Female(Individuals Vaccinated)"].sum()
gender_df = pd.DataFrame({"Gender": ["Male", "Female"], "Count": [male, female]})
fig = px.pie(
    gender_df,
    names="Gender",
    values="Count",
    title="Male and Female Vaccination",
)
fig.show()

# Remove rows where state = India

vaccine = vaccine_df[vaccine_df.State != "India"]
vaccine
vaccine.rename(columns={"Total Individuals Vaccinated": "Total"}, inplace=True)
vaccine.head()

# Most Vaccinated State
max_vac = vaccine.groupby("State")["Total"].sum().to_frame("Total")
max_vac = max_vac.sort_values("Total", ascending=False)[:5]
max_vac

fig = plt.figure(figsize=(10, 5))
plt.title("Top 5 Vaccinated States in India", size=20)
x = sns.barplot(
    data=max_vac.iloc[:10],
    y=max_vac.Total,
    x=max_vac.index,
    linewidth=2,
    edgecolor="black",
)
plt.xlabel("States")
plt.ylabel("Vaccination")
plt.show()
