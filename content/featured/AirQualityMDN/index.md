---
date: '1'
title: 'Probabilistic Air Pollution Forecasting Using Mixture Density Networks'
cover: './mixture_evolution.png'
github: 'https://github.com/PeteCastle/aqi-mdn'
external: 'https://github.com/PeteCastle/aqi-mdn'
tag: 'Probabilistic Modelling'
tech:
  - PyTorch
  - Time-Series Forecasting
  - Mixture Density Networks
---

This study presents a probabilistic air pollution forecasting framework using [Mixture Density Networks (MDNs)](https://medium.com/data-science/predicting-the-unpredictable-905f634acc20) combined with various sequential models (RNN, GRU, LSTM, TCN, Transformer). Trained on hourly air quality data from Metro Manila, the GRU-MDN architecture emerged as the most effective, offering well-calibrated predictive distributions and the lowest validation loss (–4.73). Compared to traditional RNN baselines and deterministic approaches, MDNs more accurately capture uncertainty and temporal variability in pollutants like CO and NO, enabling risk-aware and interpretable forecasts for environmental decision-making.
