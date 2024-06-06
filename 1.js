import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RealTimeCandlestickChart = () => {
  const [series, setSeries] = useState([
    {
      data: [
        // Initial sample data
        { x: new Date('2023-06-01'), y: [8200, 8350, 8100, 8300] },
        { x: new Date('2023-06-02'), y: [8300, 8450, 8200, 8400] },
        { x: new Date('2023-06-03'), y: [8400, 8500, 8300, 8450] },
        { x: new Date('2023-06-04'), y: [8450, 8600, 8400, 8550] },
      ],
    },
  ]);

  const [markers, setMarkers] = useState([
    {
      x: new Date('2023-06-02').getTime(),
      y: 8400,
      marker: {
        size: 8,
        fillColor: '#FF0000',
        strokeColor: '#FF0000',
        shape: 'circle',
      },
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastDataPoint = series[0].data[series[0].data.length - 1];
      const newTime = new Date(lastDataPoint.x).getTime() + 86400000; // Add one day
      const newY = [
        lastDataPoint.y[3], // Use last close as new open
        lastDataPoint.y[3] + Math.random() * 100, // Simulated high
        lastDataPoint.y[3] - Math.random() * 100, // Simulated low
        lastDataPoint.y[3] + Math.random() * 50, // Simulated close
      ];
      setSeries([
        {
          data: [...series[0].data, { x: new Date(newTime), y: newY }],
        },
      ]);
      setMarkers([
        ...markers,
        {
          x: newTime,
          y: newY[3], // Use the new close value
          marker: {
            size: 8,
            fillColor: '#FF0000',
            strokeColor: '#FF0000',
            shape: 'circle',
          },
        },
      ]);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [series, markers]);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
    },
    markers: {
      size: 5,
    },
    annotations: {
      points: markers,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default RealTimeCandlestickChart;