import React, { useState } from 'react';
import StockComparisonChart from './components/StockComparisonChart';
import StockInput from './components/StockInput';

const App = () => {
    const [stockSymbols, setStockSymbols] = useState(['AAPL', 'GOOGL', 'MSFT']);

    const handleAddStock = (newStock) => {
        if (!stockSymbols.includes(newStock)) {
            setStockSymbols([...stockSymbols, newStock]);
        }
    };

    return (
        <div>
            <h1>Compare Stocks</h1>
            <StockInput onAddStock={handleAddStock} />
            <StockComparisonChart stockSymbols={stockSymbols} />
        </div>
    );
};

export default App;