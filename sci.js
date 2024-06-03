import React, { useEffect, useRef } from 'react';
import {
    SciChartSurface,
    NumericAxis,
    XyDataSeries,
    FastCandlestickRenderableSeries,
    FastLineRenderableSeries,
    EAutoRange,
    NumberRange,
} from 'scichart';
import { SciChartVerticalGroup } from 'scichart/Charting/LayoutManager/SciChartVerticalGroup';
import { EStrokePaletteMode } from 'scichart/Charting/Model/Pen2D';
import data from './data.json'; // Adjust the path to your local data

const MultiPaneStockChart = () => {
    const mainChartRef = useRef(null);
    const rsiChartRef = useRef(null);
    const macdChartRef = useRef(null);

    useEffect(() => {
        const initSciChart = async () => {
            // Main Chart
            const { sciChartSurface: mainChartSurface, wasmContext: mainWasmContext } = await SciChartSurface.create(mainChartRef.current);
            const xAxis = new NumericAxis(mainWasmContext);
            const yAxis = new NumericAxis(mainWasmContext);
            mainChartSurface.xAxes.add(xAxis);
            mainChartSurface.yAxes.add(yAxis);

            const candlestickSeries = new FastCandlestickRenderableSeries(mainWasmContext, {
                dataSeries: new XyDataSeries(mainWasmContext, {
                    xValues: data.candlesticks.map(d => new Date(d.time).getTime()),
                    openValues: data.candlesticks.map(d => d.open),
                    highValues: data.candlesticks.map(d => d.high),
                    lowValues: data.candlesticks.map(d => d.low),
                    closeValues: data.candlesticks.map(d => d.close),
                }),
            });
            mainChartSurface.renderableSeries.add(candlestickSeries);

            // RSI Chart
            const { sciChartSurface: rsiChartSurface, wasmContext: rsiWasmContext } = await SciChartSurface.create(rsiChartRef.current);
            const rsiXAxis = new NumericAxis(rsiWasmContext);
            const rsiYAxis = new NumericAxis(rsiWasmContext);
            rsiChartSurface.xAxes.add(rsiXAxis);
            rsiChartSurface.yAxes.add(rsiYAxis);

            const rsiSeries = new FastLineRenderableSeries(rsiWasmContext, {
                dataSeries: new XyDataSeries(rsiWasmContext, {
                    xValues: data.rsi.map(d => new Date(d.time).getTime()),
                    yValues: data.rsi.map(d => d.value),
                }),
                stroke: 'blue',
            });
            rsiChartSurface.renderableSeries.add(rsiSeries);

            // MACD Chart
            const { sciChartSurface: macdChartSurface, wasmContext: macdWasmContext } = await SciChartSurface.create(macdChartRef.current);
            const macdXAxis = new NumericAxis(macdWasmContext);
            const macdYAxis = new NumericAxis(macdWasmContext);
            macdChartSurface.xAxes.add(macdXAxis);
            macdChartSurface.yAxes.add(macdYAxis);

            const macdLineSeries = new FastLineRenderableSeries(macdWasmContext, {
                dataSeries: new XyDataSeries(macdWasmContext, {
                    xValues: data.macd.map(d => new Date(d.time).getTime()),
                    yValues: data.macd.map(d => d.macd),
                }),
                stroke: 'green',
            });
            const macdSignalSeries = new FastLineRenderableSeries(macdWasmContext, {
                dataSeries: new XyDataSeries(macdWasmContext, {
                    xValues: data.macd.map(d => new Date(d.time).getTime()),
                    yValues: data.macd.map(d => d.signal),
                }),
                stroke: 'red',
            });
            macdChartSurface.renderableSeries.add(macdLineSeries);
            macdChartSurface.renderableSeries.add(macdSignalSeries);

            // Link X-Axes of charts
            const verticalGroup = new SciChartVerticalGroup();
            verticalGroup.addSurfaceToGroup(mainChartSurface);
            verticalGroup.addSurfaceToGroup(rsiChartSurface);
            verticalGroup.addSurfaceToGroup(macdChartSurface);
        };

        initSciChart();

        return () => {
            SciChartSurface.delete(mainChartRef.current);
            SciChartSurface.delete(rsiChartRef.current);
            SciChartSurface.delete(macdChartRef.current);
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div ref={mainChartRef} style={{ flex: 1 }}></div>
            <div ref={rsiChartRef} style={{ flex: 1 }}></div>
            <div ref={macdChartRef} style={{ flex: 1 }}></div>
        </div>
    );
};

export default MultiPaneStockChart;