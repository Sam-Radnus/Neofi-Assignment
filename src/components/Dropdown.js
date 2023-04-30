import React, { useState } from "react";
import "./Dropdown.css"
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-dropdown">
      <select value={selectedOption}  style={{
        backgroundColor: "rgb(28, 23, 49)",
        color: "white",
        border: "none",
        padding: "8px",
        borderRadius: "4px",
        fontSize: "16px",
        width:'357px',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E%0A")', // Add this line
        backgroundPosition: 'right 8px center', // Add this line
        backgroundRepeat: 'no-repeat' 
      }} onChange={handleChange}>
        <option style={{textIndent: '30px !important'}}value="">Select an option</option>
        {options.map((option) => (
          <option style={{color:'white'}}key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
