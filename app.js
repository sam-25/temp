// App.js
import React, { useState } from 'react';
import F1 from './f1';
import F2 from './f2';

const App = () => {
    const [crosshair, setCrosshair] = useState({});

    const handleCrosshairMove = (param, chartId) => {
        setCrosshair((prevCrosshair) => ({
            ...prevCrosshair,
            [chartId]: param,
        }));
    };

    return (
        <div>
            <F1 onCrosshairMove={handleCrosshairMove} />
            <F2 onCrosshairMove={handleCrosshairMove} />
        </div>
    );
};

export default App;