import React, { useEffect, useRef } from 'react';
import * as LightweightCharts from 'lightweight-charts';

const TradingViewMultipleCharts = () => {
    const chartContainerRef = useRef(null);

    const generateLineData = (minValue, maxValue, maxDailyGainLoss = 1000) => {
        var res = [];
        var time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
        for (var i = 0; i < 500; ++i) {
            var previous = res.length > 0 ? res[res.length - 1] : { value: 0 };
            var newValue = previous.value + ((Math.random() * maxDailyGainLoss * 2) - maxDailyGainLoss);

            res.push({
                time: time.getTime() / 1000,
                value: Math.max(minValue, Math.min(maxValue, newValue))
            });

            time.setUTCDate(time.getUTCDate() + 1);
        }

        return res;
    };

    const generateHistogramData = (minValue, maxValue) => {
        var res = [];
        var time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
        for (var i = 0; i < 500; ++i) {
            res.push({
                time: time.getTime() / 1000,
                value: minValue + Math.random() * (maxValue - minValue)
            });

            time.setUTCDate(time.getUTCDate() + 1);
        }

        return res;
    };

    useEffect(() => {
        if (chartContainerRef.current) {
            var chart = LightweightCharts.createChart(chartContainerRef.current, {
                timeScale: {
                    borderColor: "rgb(225, 226, 227)"
                },
                overlayPriceScales: {
                    scaleMargins: {
                        top: 0.6,
                        bottom: 0,
                    }
                },
                rightPriceScale: {
                    autoScale: true,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.08,
                    }
                }
            });

            var mainSeries = chart.addLineSeries({
                title: 'primary',
                priceFormat: {
                    minMove: 1,
                    precision: 0,
                },
            });

            mainSeries.setData(generateLineData(1000, 300000, 1500));

            var secondSeries = chart.addLineSeries({
                title: 'second',
                priceFormat: {
                    minMove: 1,
                    precision: 0,
                },
                color: '#ff0000',
                pane: 1
            });
            secondSeries.setData(generateLineData(1000, 10000, 200));

            var thirdSeries = chart.addLineSeries({
                title: 'third',
                priceFormat: {
                    minMove: 1,
                    precision: 0,
                },
                color: '#00ff00',
                pane: 1
            });
            thirdSeries.setData(generateLineData(0, 100, 20));

            var fourthSeries = chart.addLineSeries({
                title: 'fourth',
                priceFormat: {
                    minMove: 1,
                    precision: 0,
                },
                color: '#ea6622',
                pane: 2
            });
            fourthSeries.setData(generateLineData(1000000, 100000000, 20000));

            var volumeSeries = chart.addHistogramSeries({
                secondary: 'volume',
                priceScaleId: '',
                pane: 0
            });
            volumeSeries.setData(generateHistogramData(100000, 3000000));
        }
    }, []);

    return <div ref={chartContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default TradingViewMultipleCharts;
