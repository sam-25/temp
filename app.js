// App.js
import React, { useState } from 'react';
import F1 from './f1';
import F2 from './f2';

const App = () => {
    const [crosshair, setCrosshair] = useState({});

    const handleCrosshairMove = (param, chartId) => {
        if (!param || !param.point || !param.time) return;

        const otherChartId = chartId === "chart1" ? "chart2" : "chart1";

        setCrosshair((prevCrosshair) => ({
            ...prevCrosshair,
            [otherChartId]: {
                point: param.point,
                time: param.time,
            },
        }));
    };

    return (
        <div>
            <F1 onCrosshairMove={handleCrosshairMove} syncCrosshair={crosshair.chart1} />
            <F2 onCrosshairMove={handleCrosshairMove} syncCrosshair={crosshair.chart2} />
        </div>
    );
};

export default App;