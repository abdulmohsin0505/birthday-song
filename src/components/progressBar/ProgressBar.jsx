import React from "react";
import "./progressBar.css";

const ProgressBar = ({ currentStep }) => {
  const steps = 6;

  const renderCircles = () => {
    const circles = [];
    for (let step = 1; step <= steps; step++) {
      const isActive = step <= currentStep;
      const isCurrent = step === currentStep;
      const isPrev = step < currentStep;

      const circleStyle = {
        backgroundColor: isPrev ? "#e7b464" : "white",
        borderColor: isActive ? "#e7b464" : isCurrent ? "#e7b464" : "white",
      };

      circles.push(
        <div
          key={step}
          className={`circle ${isActive ? "active" : ""} ${
            isPrev ? "previous" : ""
          }`}
          style={circleStyle}
        ></div>
      );
    }
    return circles;
  };

  return <div className="progress_bar">{renderCircles()}</div>;
};

export default ProgressBar;
