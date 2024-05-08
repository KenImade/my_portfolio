---
title: "Building a Real Estate Transactions Data Pipeline"
date: "2024-04-3"
---

![Real Estate Data Pipeline](/posts/photos/real-estate-pipeline.png "Real Estate Data Pipeline")

Hi there, it's been over month since my last post. Time sure does fly by fast. So what have I been up to? 
Well the title of the post gives it away I hope. Yes, after a few weeks of battling with Apache Airflow,
understanding the powers of the linux command sudo (believe me when I say I have a better understanding of
linux permissions now than I had a few weeks ago), and cloud infrastructure building, I have finally deployed 
my first end-to-end data engineering pipeline from data loading down to a dashboard. So sit tight while I recap
my journey in this short post. However, if you just need a quick recap on a particular section of the project. 
The table of contents below should help.

**Project Repo**👉: [LINK](https://github.com/KenImade/real_estate_dashboard)

**Dashboard**: [LINK](https://lookerstudio.google.com/reporting/0cce3cd0-a312-49ee-b4e9-5439192078ec)

## Table of Contents
- [Data Ingestion](#data-ingestion)
- [Data Processing](#data-processing)
- [Workflow Management](#workflow-management)
- [Data Modelling](#data-modelling)
- [Cloud Deployment](#cloud-deployment)
- [Dashboard and Visualization](#dashboard-and-visualization)

## Data Ingestion
I have an interest in real estate, so I decided to work with the price paid dataset available on the [UK Government
Open Data Portal](https://www.gov.uk/government/collections/price-paid-data). The datasets where available as CSV format
or TXT format and can be downloaded as a one time download which meant a large file to process or as separate files based on
the various transactions in one calendar year with another file which was updated monthly for the current year and also
had updates to transactions carried out in previous years. 

I went with the separate files because that meant in the bash script to download the data I could put a clause
to avoid downloading data from previous years as these would already be available in the data folder and would mean the
pipline will be faster in execution time when ingesting the latest data. 

In summary, the process for data ingestion was to create a bash script which would download the data into a folder on the host machine 
for further processing.

## Data Processing
For data processing I went with Pandas, why Pandas and not PySpark? A look at the file sizes on the website showed they varied 
around the 60MB to 190MB, file sizes that are easily handled by Pandas. The processing was relatively straightforward, I just
needed to make sure that pandas could recognize the data types for each column and thier names. I also added a column to indicate
if the file being processed was the update file with the latest data because I would need to use that as a filtering mechanism
when writing my SQL queries in dbt. The final step was saving the data as a parquet file before uploading to a Google Cloud Storage
bucket.

## Workflow Management
I used Airflow for my workflow orchestration. It was going to be responsible for the whole data pipeline from setting up the directories
on the host machine for the data all the way to loading the data into the BigQuery table. To set up airflow I went with Docker containers
which would be running the Airflow Webserber, Scheduler, and Postgres database. The dag created was set to run on a monthly basis as the data source will be updated at that frequency. One of my major challenges with setting up Airflow was giving access to Airflow to the various directories because apparently Airflow works by creating a user typically called airflow and without setting the right permissions
on the directory it will not be able to access the required files.

## Data Modelling
To model the data after processing it was loaded into a BigQuery table and from that table I used dbt to create a dimension and fact table which can be used to create the dashboard. I created multiple CTE's to separate and process the data because 

## Cloud Deployment
To build the various infrastructure I would need on the cloud, I used Terraform. For this project the process was to create resources such
as a Google Storage bucket, a BigQuery dataset, a virtual machine which would have a Google service account attached, and a firewall for the
virtual machine. I also wrote a bash script which would be run when the vm instance was created and would install tools like docker and docker compose on the machine and then pull the project files from git and run the Airflow application.

## Dashboard and Visualization