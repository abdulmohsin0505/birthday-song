import React, { useState } from "react";
import "./genderInput.css";
const GenderInput = () => {
  const [selectedGender, setSelectedGender] = useState("male");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div className="gender-input-container">
      <label htmlFor="gender">Gender:</label>
      <div className="input-group">
        <select
          id="gender"
          value={selectedGender}
          onChange={handleGenderChange}
          className="select-gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add more gender options as needed */}
        </select>
      </div>
    </div>
  );
};

export default GenderInput;
