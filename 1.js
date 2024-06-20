import React from 'react';
import { Line } from 'react-chartjs-2';

const App = () => {
  const indicatorColors = {
    RSI: '#FF0000', // Red
    MACD: '#00FF00', // Green
    OBV: '#0000FF', // Blue
    // Add other indicators and their colors here
  };

  // Sample data for demonstration
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    RSI: [30, 45, 50, 60, 55, 40, 30],
    MACD: [1, 2, 1, 2, 1, 2, 1],
    OBV: [1000, 1500, 1100, 1300, 1200, 1400, 1250],
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'RSI',
        data: data.RSI,
        borderColor: indicatorColors.RSI,
        fill: false,
      },
      {
        label: 'MACD',
        data: data.MACD,
        borderColor: indicatorColors.MACD,
        fill: false,
      },
      {
        label: 'OBV',
        data: data.OBV,
        borderColor: indicatorColors.OBV,
        fill: false,
      },
      // Add other indicators here
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  const Legend = ({ colors }) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {Object.keys(colors).map(indicator => (
        <div key={indicator} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: colors[indicator], marginRight: '5px' }}></div>
          <span>{indicator}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="App">
      <h1>Indicator Chart</h1>
      <Line data={chartData} options={options} />
      <Legend colors={indicatorColors} />
    </div>
  );
};

export default App;