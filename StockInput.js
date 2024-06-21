import React, { useState } from 'react';

const StockInput = ({ onAddStock }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const newStock = event.target.value.toUpperCase();
            onAddStock(newStock);
            setInputValue('');
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter stock symbol and press Enter"
        />
    );
};

export default StockInput;