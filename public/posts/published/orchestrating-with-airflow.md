---
title: "Orchestrating with Airflow"
date: "2024-04-3"
---

![Composer](/posts/photos/mark-fletcher-brown.jpg "Composer")
Photo by <a class="text-centre" href="https://unsplash.com/@markfb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mark Fletcher-Brown</a> on <a href="https://unsplash.com/photos/man-in-long-sleeved-shirt-t2mjbIpnxVY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

This week I moved on to the next module of the data engineering zoomcamp which is workflow orchestration. The module focused on using Mage, however I wanted to learn Apache Airflow due to its popularity and most of the job descriptions I read mention Apache Airflow. The tutorial offered by DataTalks on Airflow was a bit confusing so I searched Youtube and found something easier for me to understand. You can check it out [here](https://www.youtube.com/watch?v=K9AnJ9_ZAXE) if you're interested.

After I watched and followed along with the video, I challenged myself to build a similar project but using Google Cloud. The project was to use Apache Airflow to build an end-to-end data pipeline, that is download data from a source in this case the UK Government's Open Data Source, clean the data, transform to a parquet (the little reading I did on why this format? it apparently costs less to store parquet files so anything to keep those cloud costs low 😉), upload to a Google Cloud Storage Bucket and then convert to a BigQuery Table. In addition, to use Terraform to set up the infrastructure on the cloud. You can check out the repo for the project [here](https://github.com/KenImade/data-pipeline-with-airflow).

![Data Pipeline](/posts/photos/data_pipeline.png "Data Pipeline")
  
## Setting up the Cloud Infrastructure
The first step was to set up the cloud infrastructure. This means I needed to create a service account on Google Cloud which had the rights to create and destroy storage buckets, and BigQuery Tables. The downloaded json key file was then stored in a folder under the terraform directory called ``keys``.

**Note of Warning:**
Make sure to exclude the keys folder from version control. You don't want to give anyone access to your cloud account.

I then created a terraform file to write out the details of the infrastructure needed to run this project. Terraform gives you the ability to write out infrastructure as code in a single file thereby giving you the ability to manage your resources efficiently. I created another terraform file to define the variables such as the project id, bucket name, etc. With the variables file set up in the main terraform file I could easily refer to a variable in multiple places without needing to write the whole value in several places. With the files prepared I went ahead to set up the infrastructure.

![Terraform Success](/posts/photos/terraform_success.png "Terraform Success")

## Setting up the Airflow Environment
With the infrastructure in place, the next step was to create the Airflow Environment. To set up the environment you need to also setup along Airflow the libraries you need to download (wget), clean (pandas), and convert the data (pyarrow). To do this I created a ``requirements.txt`` file to write the required libraries and also a Dockerfile to install the libraries and Airflow. I then built the docker image and edited the airflow docker-compose file image parameter to point to that image and also edited some parameters like changing the example DAG files provided by Airflow to false. Finally, I ran the docker-compose up to bring up the Airflow UI.

![Airflow Running](/posts/photos/airflow_success.png "Airflow Running")

## Scripting the DAG
The DAG (Directed Acyclic Graph) file is what Airflow uses to understand what tasks to run in a data pipeline. For this pipeline the tasks where as follows:
1. Download the data using wget
2. Clean the data using Pandas
3. Convert the data to Parquet using Pyarrow
4. Upload data to Google Storage Bucket.
5. Import data into BigQuery Table.

To implement these tasks in Airflow you need to make use of operators. Operators are commands executed by Airflow for each task, they basically tell Airflow what kind of commnad you are trying to execute. For example to download the data we will need a Bash Operator. This would look something like this.

```
from airflow import DAG

from datetime import datetime, timedelta
from airflow.operators.bash import BashOperator


with DAG(
    dag_id='id of your dag',
    default_args=dict containing info like the dag creator and number of times to retry the pipeline if it fails,
    description="Description of pipeline",
    start_date=datetime object to indicate the scheduled time to run the pipeline,
    schedule_interval=the frequency of running the dag can be daily, monthly, etc
) as dag:
    download_data = BashOperator(
        task_id='download_data',
        bash_command= bash command to download data
    )

download_data
```

## Connecting Airflow to Google Cloud
Airflow through its UI provides a way to connect to your Google Cloud Account using a service account. This can be found under Admin > Connections. You will need your service account json key file for this step. After setting up the connection you can go ahead and run the DAG.

## Skilled Up with Airflow
This project was really exciting to do. I always wondered why most job descriptions required a knowledge of Airflow. Having done this project its apparent why. While I've come to have an appreciation for the tool and the problem it solves in the data space. Its configuration is something that I'm sure will make me keep on returning to google and the official documentation to solve why my environment won't start 😅. All in all it's a great tool to learn and definitely powers up the whole process of data engineering.

## Sidenote:
A cool name for someone who is skilled at Airflow or a similar tool should be Data Maestro. 😎🕴️