// ChartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { synchronizeCharts } from './chart';

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [charts, setCharts] = useState([]);

  const addChart = (chart) => {
    setCharts((prevCharts) => [...prevCharts, chart]);
  };

  const removeChart = (chart) => {
    setCharts((prevCharts) => prevCharts.filter(c => c !== chart));
  };

  useEffect(() => {
    if (charts.length > 1) {
      synchronizeCharts(charts);
    }
  }, [charts]);

  return (
    <ChartContext.Provider value={{ charts, addChart, removeChart }}>
      {children}
    </ChartContext.Provider>
  );
};