---
date: '2025-08-01'
title: 'Deployment: AQI Probability Prediction'
github: 'https://github.com/PeteCastle/6bd14ff485084ce2fd9c18e9539cab76bc04816b587a434afc54c644bc3abdc7_aqi_probability_prediction'

tech:
    - Apache Airflow
    - Docker/Docker-Compose
    - Celery
    - Redis
showInProjects: true
---
This project develops a probabilistic air quality forecasting pipeline using Mixture Density Networks (MDNs) with multiple time-series models. It is containerized using Docker and orchestrated with Apache Airflow, supporting scalable training, evaluation, and report generation via a fully automated DAG. The setup demonstrates practical MLOps principles including modularity, reproducibility, and pipeline orchestration.