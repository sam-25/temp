import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

const StockComparisonChart = ({ stockSymbols }) => {
    const chartContainerRef = useRef();
    const chartRef = useRef();
    const seriesRef = useRef([]);

    useEffect(() => {
        // Initialize chart
        chartRef.current = createChart(chartContainerRef.current, { width: 600, height: 400 });
        
        return () => chartRef.current.remove();
    }, []);

    useEffect(() => {
        if (stockSymbols.length === 0) return;

        // Remove existing series
        seriesRef.current.forEach(series => chartRef.current.removeSeries(series));
        seriesRef.current = [];

        // Fetch data and create series for each stock
        stockSymbols.forEach(async (symbol, index) => {
            const response = await axios.get(`/api/stock-data?symbol=${symbol}`);
            const data = response.data.map(item => ({
                time: item.date, 
                value: item.close
            }));

            const lineSeries = chartRef.current.addLineSeries({
                color: getColor(index),
                title: symbol,
            });
            lineSeries.setData(data);
            seriesRef.current.push(lineSeries);
        });
    }, [stockSymbols]);

    const getColor = (index) => {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffa500', '#800080'];
        return colors[index % colors.length];
    };

    return (
        <div>
            <div ref={chartContainerRef} />
        </div>
    );
};

export default StockComparisonChart;