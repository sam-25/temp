import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

const generateRandomMarkers = (data) => {
  const markers = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    markers.push({
      x: data[randomIndex].x,
      y: data[randomIndex].y,
      marker: {
        size: 6,
        fillColor: '#FF4560',
        strokeColor: '#00E396',
        shape: 'circle',
      },
      label: {
        borderColor: '#FF4560',
        offsetY: 0,
        style: {
          color: '#fff',
          background: '#FF4560',
        },
        text: 'Marker ' + (i + 1),
      }
    });
  }
  return markers;
};

const RSI = ({ series }) => {
  const randomMarkers = generateRandomMarkers(series[0].data);
  
  const [optionsRSI] = useState({
    chart: {
      id: 'rsi',
      group: 'social',
      type: 'line',
      height: 160,
    },
    title: {
      text: 'RSI Chart',
      align: 'left',
    },
    xaxis: {
      range: 10,
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD HH:mm');
        },
      },
    },
    yaxis: {
      // min: 0,
      // max: 1,
      opposite: true,
    },
    annotations: {
      points: randomMarkers,
    },
  });

  return (
    <div id="chart-rsi">
      <ReactApexChart options={optionsRSI} series={series} type="line" height={300} />
    </div>
  );
};

export default RSI;