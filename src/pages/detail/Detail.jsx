import { useState } from "react";
import capGift from "../../assets/images/Cap&Gift.png";
import Headphone from "../../assets/images/Headphone.png";
import "./detail.css";
import AgeInput from "../../components/forms/input/age/AgeInput";
import GenderInput from "../../components/forms/input/gender/GenderInput";
import Mood from "../../components/forms/mood/Mood";
import Genre from "../../components/forms/genre/Genre";
import SingerVoice from "../../components/forms/singerVoice/SingerVoice";
import { opneAi } from "../../openAI/OpenAi";
import { useEffect } from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Image from "../../components/image/Image";
import Title from "../../components/title/Title";
import Header from "../../components/header/Header";

const Detail = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: 23,
    gender: "male",
    mood: "happy",
    genre: "rap",
    voice: "male",
  });
  const [lyrics, setLyrics] = useState("geneating lyrics for you...");
  const fetchLyrics = async () => {
    const res = await opneAi(formData.name, formData.gender, formData.genre);
    const data = res;
    setLyrics(data.message.content);
  };

  useEffect(() => {
    if (step === 4 && formData.name) {
      fetchLyrics();
    }
  }, [step, formData.name]);

  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <Title text={"Tell us about your loved one..."} />
            <Image src={capGift} alt="capGift" />
            <div className="form_group">
              <label htmlFor="name">Their name</label>
              <input
                type="text"
                name="name"
                placeholder="xxxxx xxxxx xxxxx"
                value={formData.name}
                onChange={(e) => handleInputChange(e.target.value, "name")}
              />
            </div>
            <div className="form_group">
              <AgeInput
                handleInputChange={handleInputChange}
                value={formData.age}
              />
              <GenderInput />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <Title text={"What would you like their song's vibe to be?"} />
            <Image src={Headphone} alt="Headphone" />
            <Mood handleInputChange={handleInputChange} mood={formData.mood} />
            <Genre
              handleInputChange={handleInputChange}
              genre={formData.genre}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Title text={"What would you like their song's vibe to be?"} />
            <Image src={Headphone} alt="Headphone" />
            <Genre
              handleInputChange={handleInputChange}
              genre={formData.genre}
            />
            <SingerVoice
              handleInputChange={handleInputChange}
              voice={formData.voice}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Title text={"Your song's lyrics are ready!"} />
            <div className="output_lyrics">
              <p className="lyrics">{lyrics}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <main className="detail">
      {/* Header */}
      <Header />
      {/* Progress Bar */}
      <ProgressBar currentStep={step} />

      {renderContent()}
      {/* Navigation buttons */}

      {step < 4 ? (
        <button
          className="proceed_btn"
          onClick={() => setStep(formData.name ? step + 1 : step)}
        >
          Proceed
        </button>
      ) : null}
    </main>
  );
};

export default Detail;
