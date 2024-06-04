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
    baseval += 86400000;
    i++;
  }
  return series;
};

const ApexChart = () => {
  const [series, setSeries] = useState([{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 60 })
  }]);

  const [options, setOptions] = useState({
    chart: {
      id: 'fb',
      group: 'social',
      type: 'line',
      height: 160
    },
    colors: ['#008FFB']
  });

  const [seriesLine2, setSeriesLine2] = useState([{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 30 })
  }]);

  const [optionsLine2, setOptionsLine2] = useState({
    chart: {
      id: 'tw',
      group: 'social',
      type: 'line',
      height: 160
    },
    colors: ['#546E7A']
  });

  const [seriesArea, setSeriesArea] = useState([{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 60 })
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

  const [seriesSmall, setSeriesSmall] = useState([{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 60 })
  }]);

  const [optionsSmall, setOptionsSmall] = useState({
    chart: {
      id: 'ig',
      group: 'social',
      type: 'area',
      height: 160,
      width: 300
    },
    colors: ['#008FFB']
  });

  const [seriesSmall2, setSeriesSmall2] = useState([{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, { min: 10, max: 60 })
  }]);

  const [optionsSmall2, setOptionsSmall2] = useState({
    chart: {
      id: 'li',
      group: 'social',
      type: 'area',
      height: 160,
      width: 300
    },
    colors: ['#546E7A']
  });

  return (
    <div>
      <div id="wrapper">
        <div id="chart-line">
          <ReactApexChart options={options} series={series} type="line" height={160} />
        </div>
        <div id="chart-line2">
          <ReactApexChart options={optionsLine2} series={seriesLine2} type="line" height={160} />
        </div>
        <div id="chart-area">
          <ReactApexChart options={optionsArea} series={seriesArea} type="area" height={160} />
        </div>
        <div className="columns">
          <div id="chart-small">
            <ReactApexChart options={optionsSmall} series={seriesSmall} type="area" height={160} width={300} />
          </div>
          <div id="chart-small2">
            <ReactApexChart options={optionsSmall2} series={seriesSmall2} type="area" height={160} width={300} />
          </div>
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<ApexChart />, domContainer);

export default ApexChart;