import React, { useState } from "react";
import Select from "react-tailwindcss-select";
import 'react-tailwindcss-select/dist/index.css'
//npm install react-tailwindcss-select 

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const MultiSelect = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <Select
            isMultiple
            isClearable
            value={animal}
            onChange={handleChange}
            options={options}
        />
    );
};

export default MultiSelect;
