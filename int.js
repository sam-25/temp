import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

const CandlestickChart = ({ socket }) => {
    const [list, setList] = useState([{
        x: new Date(Date.now()),
        y: [184.19,184.19,184.19,184.19]
    }]);
    const [rsiList, setRsiList] = useState([]);

    const [series, setSeries] = useState([
        {
            name: 'candle',
            data: list
        },
        {
            name: 'RSI',
            data: rsiList,
            type: 'line',
            yAxis: 'RSI',
        }
    ]);

    useEffect(() => {
        socket.on('getRawData', (data) => {
            let array = [data['open'], data['high'], data['low'], data['close']];
            const obj = {
                x: new Date(data["timestamp"]),
                y: array
            }
            setList((list) => [...list, obj]);

            // Using 'open' as RSI value for now
            const rsiObj = {
                x: new Date(data["timestamp"]),
                y: data['open']
            }
            setRsiList((rsiList) => [...rsiList, rsiObj]);
        })
    }, [socket]);

    useEffect(() => {
        const newSeries = [
            {
                name: 'candle',
                data: list
            },
            {
                name: 'RSI',
                data: rsiList,
                type: 'line',
                yAxis: 'RSI',
            }
        ];
        setSeries(newSeries);
    }, [list, rsiList]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'candlestick',
        },
        title: {
            text: 'CandleStick Chart - Category X-axis',
            align: 'left'
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }
            ]
        },
        tooltip: {
            enabled: true,
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val) {
                    return dayjs(val).format('MMM DD HH:mm')
                }
            }
        },
        yaxis: [{
            tooltip: {
                enabled: true
            }
        }, {
            seriesName: 'RSI',
            opposite: true,
            max: 200,
            min: 0,
            axisTicks: {
                show: true
            },
            axisBorder: {
                show: true,
                color: '#FF1654'
            },
            labels: {
                style: {
                    color: '#FF1654',
                }
            },
            title: {
                text: "RSI",
                style: {
                    color: '#FF1654',
                }
            }
        }]
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="candlestick" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default CandlestickChart;