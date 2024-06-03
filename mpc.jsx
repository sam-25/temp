import React, { useEffect, useRef } from 'react';
import {
    SciChartVerticalGroup,
    CategoryAxis,
    EAxisAlignment,
    SciChartSurface,
    EAutoRange,
    NumberRange,
    NumericAxis,
    OhlcDataSeries,
    FastCandlestickRenderableSeries,
    XyDataSeries,
    calcAverageForArray,
    FastLineRenderableSeries,
    ZoomPanModifier,
    ZoomExtentsModifier,
    MouseWheelZoomModifier,
    RolloverModifier,
    FastBandRenderableSeries,
    XyyDataSeries,
    FastColumnRenderableSeries,
    EXyDirection,
    EFillPaletteMode,
    EStrokePaletteMode,
    parseColorToUIntArgb,
    ENumericFormat,
    SmartDateLabelProvider,
    XyMovingAverageFilter,
    EDataSeriesField,
    ELabelAlignment,
    EDataSeriesType,
    SciChartOverview,
    ESeriesType,
    FastMountainRenderableSeries,
    GradientParams,
    Point,
    TextAnnotation,
    ECoordinateMode,
    EHorizontalAnchorPoint,
    EVerticalAnchorPoint,
} from 'scichart';
import { multiPaneData } from './multiPaneData';
import { appTheme } from './theme';
import { getChartsInitializationAPI } from './getChartsInitializationAPI';  // Make sure to export this function in your module

const MultiPaneChart = () => {
    const divElementId1 = useRef(null);
    const divElementId2 = useRef(null);
    const divElementId3 = useRef(null);
    const divOverviewId = useRef(null);

    useEffect(() => {
        const {
            drawPriceChart,
            drawMacdChart,
            drawRsiChart,
            drawOverview,
            configureAfterInit,
        } = getChartsInitializationAPI();

        const initializeCharts = async () => {
            // Draw the main charts
            const chart1 = await drawPriceChart(divElementId1.current);
            const chart2 = await drawMacdChart(divElementId2.current);
            const chart3 = await drawRsiChart(divElementId3.current);

            // Draw the overview chart
            await drawOverview(chart1.sciChartSurface)(divOverviewId.current);

            // Configure synchronisation and other post-initialization settings
            configureAfterInit();
        };

        initializeCharts();

        // Clean up on unmount
        return () => {
            SciChartSurface.delete(divElementId1.current);
            SciChartSurface.delete(divElementId2.current);
            SciChartSurface.delete(divElementId3.current);
            SciChartSurface.delete(divOverviewId.current);
        };
    }, []);

    return (
        <div>
            <div id="cc_chart_3_1" ref={divElementId1} style={{ height: '200px' }}></div>
            <div id="cc_chart_3_2" ref={divElementId2} style={{ height: '200px' }}></div>
            <div id="cc_chart_3_3" ref={divElementId3} style={{ height: '200px' }}></div>
            <div id="cc_overview" ref={divOverviewId} style={{ height: '100px' }}></div>
        </div>
    );
};

export default MultiPaneChart;