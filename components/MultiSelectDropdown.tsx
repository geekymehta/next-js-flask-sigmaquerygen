// MultiSelectDropdown.js

import React, { useState, useEffect } from "react";
import "./MultiSelectDropdown.css";


const MultiSelectDropdown = ({
  options,
  selectedOptions,
  onSelectedOptionsChange,
}) => {
  const [internalSelectedOptions, setInternalSelectedOptions] = useState<any>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Update the internal state when the selectedOptions prop changes
    setInternalSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCheckboxChange = (option: any) => {
    const newSelectedOptions = internalSelectedOptions.includes(option)
      ? internalSelectedOptions.filter(
          (selectedOption: any) => selectedOption !== option
        )
      : [...internalSelectedOptions, option];

    setInternalSelectedOptions(newSelectedOptions);
    // Notify the parent component of the updated selection
    onSelectedOptionsChange(newSelectedOptions);
  };

  return (
    <div className="multi-select-dropdown">
      <div className="dropdown" onClick={toggleDropdown}>
        <div className="dropdown-header">
          <span>
            {internalSelectedOptions.length === 0
              ? "Select"
              : internalSelectedOptions.join(", ")}
          </span>
        </div>
        {dropdownOpen && (
          <div className="dropdown-content">
            {options.map((option: any) => (
              <div key={option} className="dropdown-option">
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={internalSelectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
