import React, { useState } from "react";
import { useEffect } from "react";

const AgeInput = ({ handleInputChange, value }) => {
  const [age, setAge] = useState(value);

  useEffect(() => {
    handleInputChange(age, "age");
  }, [age]);

  const handleIncrease = () => {
    setAge(age + 1);
  };

  const handleDecrease = () => {
    setAge(age - 1);
  };

  return (
    <div className="age-input-container">
      <label htmlFor="age">How old they'll be this birthday</label>
      <div className="input-group" style={{ position: "relative" }}>
        <input
          type="number"
          id="age"
          placeholder="23 years"
          value={age}
          className="age-input"
          onChange={(e) => setAge(e.target.value)}
        />
        <div
          className="icon-container"
          style={{ position: "absolute", top: "4px", right: "30px" }}
        >
          <span onClick={handleIncrease} style={{ color: "#330072" }}>
            &#9650;
          </span>
          <span
            onClick={handleDecrease}
            style={{ color: "#330072", margin: "3px" }}
          >
            &#9660;
          </span>
        </div>
      </div>
    </div>
  );
};

export default AgeInput;
