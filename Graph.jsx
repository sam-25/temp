import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Graph = () => {
  const chartContainerRef = useRef(null);
  const rsiContainerRef = useRef(null);
  const macdContainerRef = useRef(null);

  const getData = async () => {
    try {
      const resp = await fetch('http://127.0.0.1:3000/BTCUSDT/1m');
      if (!resp.ok) throw new Error('Network response was not ok');
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const renderChart = async () => {
      const chartProperties = {
        layout: {
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        },
        grid: {
          vertLines: {
            color: '#EDEDED',
          },
          horzLines: {
            color: '#EDEDED',
          },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
        },
      };

      const klinedata = await getData();
      if (!klinedata.length) return;

      // Main chart
      const mainChart = createChart(chartContainerRef.current, {
        ...chartProperties,
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });
      const candleseries = mainChart.addCandlestickSeries();
      candleseries.setData(klinedata);

      // SMA
      const sma_series = mainChart.addLineSeries({ color: 'red', lineWidth: 1 });
      const sma_data = klinedata.filter(d => d.sma).map(d => ({ time: d.time, value: d.sma }));
      sma_series.setData(sma_data);

      // EMA
      const ema_series = mainChart.addLineSeries({ color: 'green', lineWidth: 1 });
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

      // RSI chart
      const rsiChart = createChart(rsiContainerRef.current, {
        ...chartProperties,
        width: rsiContainerRef.current.clientWidth,
        height: 200,
      });
      const rsi_series = rsiChart.addLineSeries({ color: 'purple', lineWidth: 1 });
      const rsi_data = klinedata.filter(d => d.rsi).map(d => ({ time: d.time, value: d.rsi }));
      rsi_series.setData(rsi_data);

      // MACD chart
      const macdChart = createChart(macdContainerRef.current, {
        ...chartProperties,
        width: macdContainerRef.current.clientWidth,
        height: 200,
      });
      const macd_fast_series = macdChart.addLineSeries({ color: 'blue', lineWidth: 1 });
      const macd_fast_data = klinedata.filter(d => d.macd_fast).map(d => ({ time: d.time, value: d.macd_fast }));
      macd_fast_series.setData(macd_fast_data);

      const macd_slow_series = macdChart.addLineSeries({ color: 'red', lineWidth: 1 });
      const macd_slow_data = klinedata.filter(d => d.macd_slow).map(d => ({ time: d.time, value: d.macd_slow }));
      macd_slow_series.setData(macd_slow_data);

      const macd_histogram_series = macdChart.addHistogramSeries();
      const macd_histogram_data = klinedata.filter(d => d.macd_histogram).map(d => ({
        time: d.time,
        value: d.macd_histogram,
        color: d.macd_histogram > 0 ? 'green' : 'red',
      }));
      macd_histogram_series.setData(macd_histogram_data);

      // Synchronize crosshair and time scale between charts
      const synchronizeCharts = (mainChart, rsiChart, macdChart) => {
        const crosshairMoveHandler = (param) => {
          if (!param || !param.time) return;

          rsiChart.timeScale().applyOptions({ rightOffset: mainChart.timeScale().rightOffset() });
          macdChart.timeScale().applyOptions({ rightOffset: mainChart.timeScale().rightOffset() });
          rsiChart.moveCrosshair(param);
          macdChart.moveCrosshair(param);
        };

        const timeScaleChangeHandler = () => {
          const mainRange = mainChart.timeScale().getVisibleRange();
          if (mainRange) {
            rsiChart.timeScale().setVisibleRange(mainRange);
            macdChart.timeScale().setVisibleRange(mainRange);
          }
        };

        mainChart.subscribeCrosshairMove(crosshairMoveHandler);
        mainChart.timeScale().subscribeVisibleTimeRangeChange(timeScaleChangeHandler);

        rsiChart.subscribeCrosshairMove(crosshairMoveHandler);
        rsiChart.timeScale().subscribeVisibleTimeRangeChange(timeScaleChangeHandler);

        macdChart.subscribeCrosshairMove(crosshairMoveHandler);
        macdChart.timeScale().subscribeVisibleTimeRangeChange(timeScaleChangeHandler);
      };

      synchronizeCharts(mainChart, rsiChart, macdChart);
    };

    renderChart();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      <div ref={chartContainerRef} style={{ flex: 1 }} />
      <div ref={rsiContainerRef} style={{ height: 200 }} />
      <div ref={macdContainerRef} style={{ height: 200 }} />
    </div>
  );
};

export default Graph;