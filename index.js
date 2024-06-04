import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';

const candlestickData = [
  { x: new Date('2023-06-01'), y: [6629.81, 6650.5, 6623.04, 6633.33] },
  { x: new Date('2023-06-02'), y: [6632.01, 6643.59, 6620, 6630.11] },
  { x: new Date('2023-06-03'), y: [6630.71, 6648.95, 6623.34, 6635.65] },
  { x: new Date('2023-06-04'), y: [6635.65, 6651, 6629.67, 6638.24] },
  { x: new Date('2023-06-05'), y: [6638.24, 6640, 6620, 6624.47] },
  { x: new Date('2023-06-06'), y: [6624.53, 6636.03, 6621.68, 6624.31] },
  { x: new Date('2023-06-07'), y: [6624.61, 6632.2, 6617, 6626.02] },
  { x: new Date('2023-06-08'), y: [6627, 6627.62, 6584.22, 6603.02] },
  { x: new Date('2023-06-09'), y: [6605, 6608.03, 6598.95, 6604.01] },
  { x: new Date('2023-06-10'), y: [6604.5, 6614.4, 6602.26, 6608.02] },
  // Add more data points as needed
];

const lineData = [
  { x: new Date('2023-06-01'), y: 20 },
  { x: new Date('2023-06-02'), y: 25 },
  { x: new Date('2023-06-03'), y: 30 },
  { x: new Date('2023-06-04'), y: 35 },
  { x: new Date('2023-06-05'), y: 40 },
  { x: new Date('2023-06-06'), y: 45 },
  { x: new Date('2023-06-07'), y: 50 },
  { x: new Date('2023-06-08'), y: 55 },
  { x: new Date('2023-06-09'), y: 60 },
  { x: new Date('2023-06-10'), y: 65 },
  // Add more data points as needed
];

const ApexChart = () => {
  const [series] = useState([
    { name: 'Candlestick', data: candlestickData },
    { name: 'Line', data: lineData }
  ]);

  const [options] = useState({
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Candlestick Chart with Line Data',
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

  return (
    <div>
      <div id="wrapper">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<ApexChart />, domContainer);

export default ApexChart;