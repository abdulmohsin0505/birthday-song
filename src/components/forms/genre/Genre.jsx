import React, { useState, useEffect } from "react";

// icons
import rap from "../../../assets/icons/Rap.png";
import rock from "../../../assets/icons/Rock.png";
import pop from "../../../assets/icons/Pop.png";
import desi from "../../../assets/icons/Desi.png";
import EDM from "../../../assets/icons/EDM.png";

const genreOptions = [
  { id: "rap", label: "Rap", image: rap },
  { id: "rock", label: "Rock", image: rock },
  {
    id: "pop",
    label: "Pop",
    image: pop,
  },
  { id: "desi", label: "Desi", image: desi },
  { id: "EDM", label: "EDM", image: EDM },
];

const Genre = ({ handleInputChange, genre }) => {
  const [selectedGenre, setSelectedGenre] = useState(genre);

  const handleRadioChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  console.log(selectedGenre);
  useEffect(() => {
    handleInputChange(selectedGenre, "genre");
  }, [selectedGenre]);

  return (
    <article
      style={{
        height: "120px",
        width: "350px",
        border: "2px solid #e7b464",
        borderRadius: "10px",
        // margin: "10px 0",
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
        Genre
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        {genreOptions.map((genre) => (
          <div key={genre.id}>
            <input
              type="radio"
              id={genre.id}
              name="mood"
              checked={selectedGenre === genre.id}
              onChange={() => handleRadioChange(genre.id)}
              style={{ display: "none" }}
            />

            <label htmlFor={genre.id} style={{ marginLeft: "5px" }}>
              <img
                src={genre.image}
                alt={genre.label}
                style={{
                  width: "50px",
                  height: "50px",
                  background: selectedGenre === genre.id ? "#e7b464" : "white",
                  padding: "10px",
                  borderRadius: "50%",
                }}
              />
              {genre.label}
            </label>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Genre;
