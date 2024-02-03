// FormComponent.js

import { TARGET_LIST, FORMAT_LIST, PIPELINE_LIST } from "@/data/data";
import "./FormComponent.css"; // Import the updated CSS file
import MultiSelectDropdown from "./MultiSelectDropdown";
import { useState } from "react";

type FormComponentProps = { 
  target: string;
  format: string;
  pipeline: string[];
  rule: string;
  onInputChange: (name: string, value: any) => void;
};


const FormComponent = ({ target, format, pipeline, rule, onInputChange }: FormComponentProps) => {
  const [selectedOptions, setSelectedOptions] = useState(pipeline);

  const handleSelectedOptionsChange = (options:any) => {
    setSelectedOptions(options);
    onInputChange("pipeline", options); // Pass the updated options directly
  };

  return (
    <form className="flex flex-row flex-wrap">
      <div>
        <label>
          Backend:
          <select
            name="backend-input"
            value={target}
            onChange={(event) => onInputChange("target", event.target.value)}
          >
            {TARGET_LIST.map((backend) => (
              <option key={backend} value={backend}>
                {backend}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Format:
          <select
            name="format-input"
            value={format}
            onChange={(event) => onInputChange("format", event.target.value)}
          >
            {FORMAT_LIST.map((formatOption) => (
              <option key={formatOption} value={formatOption}>
                {formatOption}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>Pipeline:</label>
        <MultiSelectDropdown
          options={PIPELINE_LIST}
          onSelectedOptionsChange={handleSelectedOptionsChange}
          selectedOptions={selectedOptions} // Pass the selected options as a prop
        />
        {/* <p>Selected Options in Parent: {selectedOptions.join(", ")}</p> */}
      </div>
      <div>
        <label>
          Rule:
          <textarea className="w-full h-full"
            name="rule-input"
            typeof="text"
            value={rule}
            onChange={(event) => onInputChange("rule", event.target.value)}
          />
        </label>
      </div>
    </form>
  );
};

export default FormComponent;
