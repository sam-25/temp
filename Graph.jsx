import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Graph = () => {
  const chartContainerRef = useRef(null);

  const getData = async () => {
    const resp = await fetch('http://127.0.0.1:3000/BTCUSDT/1m');
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    const renderChart = async () => {
      const chartProperties = {
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
        },
      };
      const chart = createChart(chartContainerRef.current, chartProperties);
      const candleseries = chart.addCandlestickSeries();
      const klinedata = await getData();
      candleseries.setData(klinedata);

      // SMA
      const sma_series = chart.addLineSeries({ color: 'red', lineWidth: 1 });
      const sma_data = klinedata.filter(d => d.sma).map(d => ({ time: d.time, value: d.sma }));
      sma_series.setData(sma_data);

      // EMA
      const ema_series = chart.addLineSeries({ color: 'green', lineWidth: 1 });
      const ema_data = klinedata.filter(d => d.ema).map(d => ({ time: d.time, value: d.ema }));
      ema_series.setData(ema_data);

      // MARKERS
      candleseries.setMarkers(
        klinedata
          .filter(d => d.long || d.short)
          .map(d => d.long
            ? { time: d.time, position: 'belowBar', color: 'green', shape: 'arrowUp', text: 'LONG' }
            : { time: d.time, position: 'aboveBar', color: 'red', shape: 'arrowDown', text: 'SHORT' })
      );

      // RSI
      const rsi_series = chart.addLineSeries({ color: 'purple', lineWidth: 1 });
      const rsi_data = klinedata.filter(d => d.rsi).map(d => ({ time: d.time, value: d.rsi }));
      rsi_series.setData(rsi_data);

      // MACD FAST
      const macd_fast_series = chart.addLineSeries({ color: 'blue', lineWidth: 1 });
      const macd_fast_data = klinedata.filter(d => d.macd_fast).map(d => ({ time: d.time, value: d.macd_fast }));
      macd_fast_series.setData(macd_fast_data);

      // MACD SLOW
      const macd_slow_series = chart.addLineSeries({ color: 'red', lineWidth: 1 });
      const macd_slow_data = klinedata.filter(d => d.macd_slow).map(d => ({ time: d.time, value: d.macd_slow }));
      macd_slow_series.setData(macd_slow_data);

      // MACD HISTOGRAM
      const macd_histogram_series = chart.addHistogramSeries({ pane: 2 });
      const macd_histogram_data = klinedata.filter(d => d.macd_histogram).map(d => ({
        time: d.time,
        value: d.macd_histogram,
        color: d.macd_histogram > 0 ? 'green' : 'red',
      }));
      macd_histogram_series.setData(macd_histogram_data);
    };

    renderChart();
  }, []);

  return <div id="tvchart" ref={chartContainerRef} style={{ position: 'absolute', width: '100vw', height: '100vh' }} />;
};

export default Graph;