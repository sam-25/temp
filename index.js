import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';

// Dummy function to generate time series data
const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = baseval;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({ x, y });
    baseval += 86400000; // Increment by one day
    i++;
  }
  return series;
};

// Dummy function to generate candlestick data
const generateCandlestickData = (baseval, count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    const open = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const high = open + Math.floor(Math.random() * 10);
    const low = open - Math.floor(Math.random() * 10);
    const close = Math.floor(Math.random() * (high - low + 1)) + low;

    series.push({
      x: new Date(baseval),
      y: [open, high, low, close]
    });
    baseval += 86400000; // Increment by one day
    i++;
  }
  return series;
};

const ApexChart = () => {
  const baseTime = new Date('11 Feb 2017').getTime();
  const [seriesCandlestick, setSeriesCandlestick] = useState([{
    data: generateCandlestickData(baseTime, 20, { min: 6600, max: 6800 })
  }]);

  const [optionsCandlestick, setOptionsCandlestick] = useState({
    chart: {
      type: 'candlestick',
      height: 350,
      id: 'candle',
      group: 'social'
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  });

  const [seriesLine, setSeriesLine] = useState([{
    data: generateDayWiseTimeSeries(baseTime, 20, { min: 10, max: 60 })
  }]);

  const [optionsLine, setOptionsLine] = useState({
    chart: {
      id: 'fb',
      group: 'social',
      type: 'line',
      height: 160
    },
    colors: ['#008FFB']
  });

  const [seriesArea, setSeriesArea] = useState([{
    data: generateDayWiseTimeSeries(baseTime, 20, { min: 10, max: 60 })
  }]);

  const [optionsArea, setOptionsArea] = useState({
    chart: {
      id: 'yt',
      group: 'social',
      type: 'area',
      height: 160
    },
    colors: ['#00E396']
  });

  return (
    <div>
      <div id="wrapper">
        <div id="chart-candlestick">
          <ReactApexChart options={optionsCandlestick} series={seriesCandlestick} type="candlestick" height={350} />
        </div>
        <div id="chart-line">
          <ReactApexChart options={optionsLine} series={seriesLine} type="line" height={160} />
        </div>
        <div id="chart-area">
          <ReactApexChart options={optionsArea} series={seriesArea} type="area" height={160} />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<ApexChart />, domContainer);

export default ApexChart;