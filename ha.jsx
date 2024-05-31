import React, { useEffect, useRef } from 'react';
import { createChart, LineStyle } from 'lightweight-charts';

const BasicCandle = () => {
    const chartContainerRef1 = useRef();
    const chartContainerRef2 = useRef();

    useEffect(() => {
        const initialData = [
            { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
            { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
            { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
            { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
            { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
            { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
            { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
            { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
            { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }
        ];

        const chart1 = createChart(chartContainerRef1.current);
        const chart2 = createChart(chartContainerRef2.current);

        const commonOptions = {
            layout: {
                background: { color: '#222' },
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' },
            },
            width: chartContainerRef1.current.clientWidth,
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
        };

        chart1.applyOptions(commonOptions);
        chart2.applyOptions(commonOptions);

        chart1.timeScale().fitContent();
        chart2.timeScale().fitContent();

        chart1.priceScale("right").applyOptions({ borderColor: '#71649C' });
        chart2.priceScale("right").applyOptions({ borderColor: '#71649C' });

        chart1.timeScale().applyOptions({ borderColor: '#71649C' });
        chart2.timeScale().applyOptions({ borderColor: '#71649C' });

        const series1 = chart1.addCandlestickSeries();
        const series2 = chart2.addCandlestickSeries();

        series1.applyOptions({
            wickUpColor: 'rgb(54, 116, 217)',
            upColor: 'rgb(54, 116, 217)',
            wickDownColor: 'rgb(225, 50, 85)',
            downColor: 'rgb(225, 50, 85)',
            borderVisible: false,
        });

        series2.applyOptions({
            wickUpColor: 'rgb(54, 116, 217)',
            upColor: 'rgb(54, 116, 217)',
            wickDownColor: 'rgb(225, 50, 85)',
            downColor: 'rgb(225, 50, 85)',
            borderVisible: false,
        });

        series1.setData(initialData);
        series2.setData(initialData);

        const syncCrosshair = (event, sourceChart, targetChart) => {
            if (event.point === undefined || event.point === null) {
                targetChart.setCrossHairPosition(null);
            } else {
                targetChart.setCrossHairPosition({
                    x: event.point.x,
                    y: event.point.y,
                });
            }
        };

        chart1.subscribeCrosshairMove((event) => {
            syncCrosshair(event, chart1, chart2);
        });

        chart2.subscribeCrosshairMove((event) => {
            syncCrosshair(event, chart2, chart1);
        });

        const handleResize = () => {
            chart1.applyOptions({ width: chartContainerRef1.current.clientWidth });
            chart2.applyOptions({ width: chartContainerRef2.current.clientWidth });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            chart1.remove();
            chart2.remove();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <div ref={chartContainerRef1} style={{ marginBottom: '20px' }}></div>
            <div ref={chartContainerRef2}></div>
        </div>
    );
};

export default BasicCandle;