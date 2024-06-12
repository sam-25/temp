// ChartContext.js
import React, { createContext, useState } from 'react';

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [charts, setCharts] = useState([]);

  const addChart = (chart) => {
    setCharts((prevCharts) => [...prevCharts, chart]);
  };

  const removeChart = (chart) => {
    setCharts((prevCharts) => prevCharts.filter(c => c !== chart));
  };

  return (
    <ChartContext.Provider value={{ charts, addChart, removeChart }}>
      {children}
    </ChartContext.Provider>
  );
};