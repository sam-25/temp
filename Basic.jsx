import React, { useState, useEffect, useRef } from 'react';
import { ColorType, LineStyle, createChart } from 'lightweight-charts';

const BasicCandle = () => {

    const chartContainerRef = useRef();

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

        const chart = createChart(chartContainerRef.current);

        chart.applyOptions({ 
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

            //Vertical Line: Thickness, dash/solid, color
            crosshair:{
                vertLine:{
                    width: 5,
                    style: LineStyle.Solid,
                    color: "#C3BCDB44",
                    labelBackgroundColor: '#9B7DFF',
                }
            },
            // Horizontal crosshair line (showing Price in Label)
            horzLine: {
                color: '#9B7DFF',
                labelBackgroundColor: '#9B7DFF',
            },
        });

        //for making the chart area completely utilized
        chart.timeScale().fitContent();

        chart.priceScale("right").applyOptions({
            borderColor: '#71649C',
        });
        
        // Setting the border color for the horizontal axis
        chart.timeScale().applyOptions({
            borderColor: '#71649C',
        });

        const newSeries = chart.addCandlestickSeries();

        newSeries.applyOptions({
            wickUpColor: 'rgb(54, 116, 217)',
            upColor: 'rgb(54, 116, 217)',
            wickDownColor: 'rgb(225, 50, 85)',
            downColor: 'rgb(225, 50, 85)',
            borderVisible: false,
        })

        newSeries.setData(initialData);

        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            })
        }

        window.addEventListener("resize", handleResize);

        return () => {
            chart.remove();
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return <div ref={chartContainerRef}></div>

}

export default BasicCandle;