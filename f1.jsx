// f1.jsx
import React from 'react';
import BasicCandle from './BasicCandle';

const initialData = [
    { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
    // Add the rest of the data here...
];

const F1 = ({ onCrosshairMove, syncCrosshair }) => {
    return (
        <div>
            <BasicCandle
                initialData={initialData}
                chartId="chart1"
                onCrosshairMove={onCrosshairMove}
                syncCrosshair={syncCrosshair}
            />
        </div>
    );
};

export default F1;