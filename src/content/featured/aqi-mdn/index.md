---
order: 1
title: 'Probabilistic Air Pollution Forecasting Using Mixture Density Networks'
date: 2025-06-04
cover: './mixture_evolution.png'
coverAlt: 'Chart of the mixture components evolving over training in the GRU-MDN model'
tag: 'Probabilistic Modelling'
area: ml
tech:
  - 'PyTorch'
  - 'Time-Series Forecasting'
  - 'Mixture Density Networks'
github: 'https://github.com/PeteCastle/aqi-mdn'
summary: 'A probabilistic air pollution forecasting framework using Mixture Density Networks combined with RNN, GRU, LSTM, TCN and Transformer backbones. Trained on hourly air quality data from Metro Manila, the GRU-MDN architecture emerged as the most effective, offering well-calibrated predictive distributions and the lowest validation loss (–4.73).'
---

This study presents a probabilistic air pollution forecasting framework using [Mixture Density Networks (MDNs)](https://medium.com/data-science/predicting-the-unpredictable-905f634acc20) combined with various sequential models (RNN, GRU, LSTM, TCN, Transformer). Trained on hourly air quality data from Metro Manila, the GRU-MDN architecture emerged as the most effective, offering well-calibrated predictive distributions and the lowest validation loss (–4.73). Compared to traditional RNN baselines and deterministic approaches, MDNs more accurately capture uncertainty and temporal variability in pollutants like CO and NO, enabling risk-aware and interpretable forecasts for environmental decision-making.
