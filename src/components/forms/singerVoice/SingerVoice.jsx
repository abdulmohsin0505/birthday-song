import React, { useState } from "react";

// icons
import male from "../../../assets/icons/Male.png";
import female from "../../../assets/icons/Female.png";
import { useEffect } from "react";

const SingerVoice = ({ handleInputChange, voice }) => {
  const [selectedVoice, setSelectedVoice] = useState(voice);

  const voiceOptions = [
    { id: "male", label: "Male", image: male },
    { id: "female", label: "Female", image: female },
  ];
  const handleRadioChange = (voiceId) => {
    setSelectedVoice(voiceId);
  };

  useEffect(() => {
    handleInputChange(selectedVoice, "voice");
  }, [selectedVoice]);

  return (
    <article
      style={{
        height: "120px",
        width: "350px",
        border: "2px solid #e7b464",
        borderRadius: "10px",
        margin: "10px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#e7b464",
          color: "#330072",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
        }}
      >
        Singer's Voice
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          margin: "10px 0 0 100px",
        }}
      >
        {voiceOptions.map((voice) => (
          <div key={voice.id}>
            <input
              type="radio"
              id={voice.id}
              name="mood"
              checked={selectedVoice === voice.id}
              onChange={() => handleRadioChange(voice.id)}
              style={{ display: "none" }}
            />

            <label
              htmlFor={voice.id}
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={voice.image}
                alt={voice.label}
                style={{
                  width: "60px",
                  height: "60px",
                  background: selectedVoice === voice.id ? "#e7b464" : "white",
                  padding: "0 20px 10px 20px",
                  borderRadius: "5px",
                }}
              />
              {voice.label}
            </label>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SingerVoice;
