---
title: "Building a Data Pipeline using Docker"
date: "2024-03-30"
---

I started the data engineering bootcamp by [DataTalks](https://www.example.com) earlier this week. Containerization and Infrastructure as Code was covered. To gain a better understanding of what was taught I built a data pipeline using Docker. You can check out the project on my [GitHub](https://github.com/KenImade/data-ingestion-pipeline).

![Project Structure](../photos/data-ingestion-plan.png "Project Structure")

## Writing the Ingestion Script
To understand the structure of the data before ingestion and to test the data ingestion pipeline, I used Jupyter Notebooks and also setup a PostgreSQL database with Docker using the below command.

```
docker run -it \
    -e POSTGRES_USER=root \
    -e POSTGRES_PASSWORD=root \
    -e POSTGRES_DB=car_owners_postgres_data \
    -v $(pwd)/data/car_owners_postgres_data:/var/lib/postgresql/data \
    -p 5432:5432 \
postgres:13
```

The above command tells Docker to create a container which runs a Postgres database. The variables with the `-e` tag indicates environmental variables, `-v` which is the volume or the directory where the data being stored in the database will be persisted and `-p` the port through which we can access the database.

For the people reading who are a bit unfamiliar with Docker. Docker is a software that allows you to run a software packages in an environment called a container which is isolated from your main operating system therefore giving you the flexibility to test various softwares in a specific environment without modifying your host computer.

It also give us the ability to reproduce software with ease using a Docker Image. Docker image being a snapshot of your container which contains the instructions needed to run your software therefore sharing a copy this image with someone else allows them to run your software in the same environment you built and ran it which helps to reduce the possibility of incompatibility with someone else's environment setup. I hope that gives you a better understanding of Docker, back to writing the script.

I won't go into details on the various steps considered in building the pipeline, however this is a snippet from the script.

```python
while True:

    t_start = time()

    df = next(df_iter)

    # drop unnecessary columns
    df = df.drop(['Statistic Label', 'TLIST(A1)', 'UNIT'], axis=1)

    # drop total rows
    df = df[df['Number of Cars'] != 'Total']

    df.to_sql(name='car_owners_data', con=engine, if_exists='append')

    t_end = time()

    print('inserted another chunk..., took %.3f second(s)' % (t_end - t_start))
```

## Setting up the Environment
With the data ingestion script ready. The next step was to write the Dockerfile which would serve as the instructions on how the script would be run.

```docker
FROM python:3.12.2

RUN apt-get install wget
RUN pip install pandas sqlalchemy psycopg2

WORKDIR /app
COPY data_pipeline.py data_pipeline.py

ENTRYPOINT [ "python", "data_pipeline.py" ]
```

