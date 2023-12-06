import React, { useState } from "react";

// icons
import happy from "../../../assets/icons/Happy.png";
import calm from "../../../assets/icons/Calm.png";
import motivational from "../../../assets/icons/Motivational.png";
import romantic from "../../../assets/icons/Romantic.png";
import funny from "../../../assets/icons/Funny.png";
import { useEffect } from "react";

const moodOptions = [
  { id: "happy", label: "Happy", image: happy },
  { id: "calm", label: "Calm", image: calm },
  {
    id: "motivational",
    label: "Motivational",
    image: motivational,
  },
  { id: "romantic", label: "Romantic", image: romantic },
  { id: "funny", label: "Funny", image: funny },
];

const Mood = ({ handleInputChange, mood }) => {
  const [selectedMood, setSelectedMood] = useState(mood);

  const handleRadioChange = (moodId) => {
    setSelectedMood(moodId);
  };

  useEffect(() => {
    handleInputChange(selectedMood, "mood");
  }, [selectedMood]);
  return (
    <article
      style={{
        height: "120px",
        width: "350px",
        border: "2px solid #e7b464",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          background: "#e7b464",
          color: "#330072",
          textAlign: "center",
          height: "30px",
        }}
      >
        Mood
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        {moodOptions.map((mood) => (
          <div key={mood.id}>
            <input
              type="radio"
              id={mood.id}
              name="mood"
              checked={selectedMood === mood.id}
              onChange={() => handleRadioChange(mood.id)}
              style={{ display: "none" }}
            />

            <label htmlFor={mood.id} style={{ marginLeft: "5px" }}>
              <img
                src={mood.image}
                alt={mood.label}
                style={{
                  width: "50px",
                  height: "50px",
                  background: selectedMood === mood.id ? "#e7b464" : "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
              {mood.label}
            </label>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Mood;
