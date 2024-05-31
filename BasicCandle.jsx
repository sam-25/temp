// BasicCandle.jsx
import React, { useEffect, useRef } from 'react';
import { createChart, LineStyle } from 'lightweight-charts';

const BasicCandle = ({ initialData, chartId, onCrosshairMove }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { color: '#222' },
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' },
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
            crosshair: {
                vertLine: {
                    width: 5,
                    style: LineStyle.Solid,
                    color: "#C3BCDB44",
                    labelBackgroundColor: '#9B7DFF',
                },
                horzLine: {
                    color: '#9B7DFF',
                    labelBackgroundColor: '#9B7DFF',
                },
            },
        });

        const series = chart.addCandlestickSeries({
            wickUpColor: 'rgb(54, 116, 217)',
            upColor: 'rgb(54, 116, 217)',
            wickDownColor: 'rgb(225, 50, 85)',
            downColor: 'rgb(225, 50, 85)',
            borderVisible: false,
        });

        series.setData(initialData);

        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            });
        };

        window.addEventListener("resize", handleResize);

        chart.subscribeCrosshairMove((param) => {
            onCrosshairMove(param, chartId);
        });

        return () => {
            chart.remove();
            window.removeEventListener("resize", handleResize);
        };
    }, [initialData, chartId, onCrosshairMove]);

    return <div ref={chartContainerRef} />;
};

export default BasicCandle;