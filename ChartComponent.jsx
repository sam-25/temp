import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = () => {
  const chartContainerRef = useRef();

  const getData = async () => {
    return [
      {
        "timestamp": 1625097600,
        "open": 150.50,
        "high": 155.75,
        "low": 149.20,
        "close": 154.30,
        "rsi": 30
      },
      {
        "timestamp": 1625184000,
        "open": 154.40,
        "high": 158.00,
        "low": 153.00,
        "close": 157.60,
        "rsi": 32
      },
      {
        "timestamp": 1625270400,
        "open": 157.80,
        "high": 159.50,
        "low": 156.00,
        "close": 158.20,
        "rsi": 35
      },
      {
        "timestamp": 1625356800,
        "open": 158.30,
        "high": 160.10,
        "low": 157.50,
        "close": 159.70,
        "rsi": 40
      },
      {
        "timestamp": 1625443200,
        "open": 159.80,
        "high": 161.50,
        "low": 158.40,
        "close": 160.90,
        "rsi": 42
      },
      {
        "timestamp": 1625529600,
        "open": 161.00,
        "high": 162.80,
        "low": 159.90,
        "close": 161.50,
        "rsi": 45
      },
      {
        "timestamp": 1625616000,
        "open": 161.60,
        "high": 163.20,
        "low": 160.50,
        "close": 162.10,
        "rsi": 48
      },
      {
        "timestamp": 1625702400,
        "open": 162.20,
        "high": 164.00,
        "low": 161.30,
        "close": 163.70,
        "rsi": 50
      },
      {
        "timestamp": 1625788800,
        "open": 163.80,
        "high": 165.50,
        "low": 162.70,
        "close": 164.90,
        "rsi": 55
      },
      {
        "timestamp": 1625875200,
        "open": 165.00,
        "high": 166.80,
        "low": 164.20,
        "close": 166.30,
        "rsi": 60
      }
    ];
  };

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
      layout: {
        backgroundColor: '#ffffff',
        textColor: '#000',
      },
    });

    const candleSeries = chart.addCandlestickSeries();
    const rsiSeries = chart.addLineSeries({
      color: 'purple',
      lineWidth: 1,
    });

    const fetchAndRenderData = async () => {
      const klineData = await getData();

      const formattedData = klineData.map(d => ({
        time: d.timestamp,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close,
      }));

      candleSeries.setData(formattedData);

      const rsiData = klineData.map(d => ({
        time: d.timestamp,
        value: d.rsi,
      }));

      rsiSeries.setData(rsiData);
    };

    fetchAndRenderData();

    const resizeObserver = new ResizeObserver(entries => {
      if (entries.length === 0 || entries[0].target !== chartContainerRef.current) {
        return;
      }
      const { width, height } = entries[0].contentRect;
      chart.resize(width, height);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return <div id="tvchart" ref={chartContainerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ChartComponent;






// //Web Sockets
// // import React, { useEffect, useRef } from 'react';
// // import { createChart } from 'lightweight-charts';

// const ChartComponent = () => {
//   const chartContainerRef = useRef();
//   const candleSeriesRef = useRef();
//   const rsiSeriesRef = useRef();

//   useEffect(() => {
//     const chart = createChart(chartContainerRef.current, {
//       width: chartContainerRef.current.clientWidth,
//       height: chartContainerRef.current.clientHeight,
//       timeScale: {
//         timeVisible: true,
//         secondsVisible: false,
//       },
//       layout: {
//         backgroundColor: '#ffffff',
//         textColor: '#000',
//       },
//     });

//     const candleSeries = chart.addCandlestickSeries();
//     candleSeriesRef.current = candleSeries;

//     const rsiSeries = chart.addLineSeries({
//       color: 'purple',
//       lineWidth: 1,
//     });
//     rsiSeriesRef.current = rsiSeries;

//     const resizeObserver = new ResizeObserver(entries => {
//       if (entries.length === 0 || entries[0].target !== chartContainerRef.current) {
//         return;
//       }
//       const { width, height } = entries[0].contentRect;
//       chart.resize(width, height);
//     });

//     resizeObserver.observe(chartContainerRef.current);

//     const ws = new WebSocket('ws://your-websocket-url');

//     ws.onopen = () => {
//       console.log('WebSocket connection opened');
//     };

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       const formattedData = data.map(d => ({
//         time: d.timestamp,
//         open: d.open,
//         high: d.high,
//         low: d.low,
//         close: d.close,
//       }));

//       candleSeries.update(formattedData[0]);

//       const rsiData = data.map(d => ({
//         time: d.timestamp,
//         value: d.rsi,
//       }));

//       rsiSeries.update(rsiData[0]);
//     };

//     ws.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     ws.onerror = (error) => {
//       console.error('WebSocket error', error);
//     };

//     return () => {
//       resizeObserver.disconnect();
//       ws.close();
//     };
//   }, []);

//   return <div id="tvchart" ref={chartContainerRef} style={{ width: '100vw', height: '100vh' }} />;
// };

// export default ChartComponent;

