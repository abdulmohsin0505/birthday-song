import Header from "../../components/header/Header";
import celebration from "../../assets/images/Celebrations(Bg).png";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { useState } from "react";
import OtpPopup from "../../components/otp/OtpPopup";

const Registration = () => {
  const [user, setUser] = useState({
    phoneNumber: "",
    fullName: "",
    email: "",
    terms: false,
    promotion: false,
  });
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState({});

  const { phoneNumber, fullName, email, terms, promotion } = user;

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // Phone number validation
    if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    // Terms and conditions validation
    if (!terms) {
      newErrors.termsChecked = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration logic here
      console.log("Registration successful!", user);
      setRegistered(true);
    } else {
      console.log("Registration failed. Please check the form for errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* header */}
      <Header />

      {/* progress Bar */}
      <ProgressBar currentStep={1} />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img
            alt="celebration"
            src={celebration}
            style={{ width: "250px", height: "auto" }}
            loading="lazy"
          />
        </div>
        <form
          onSubmit={submitHandler}
          style={{
            padding: "0 20px",
            width: "376px",
          }}
        >
          <h2 style={{ fontSize: "20px", marginTop: "0", padding: "5px" }}>
            Register to create
          </h2>
          <div>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              name="terms"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="terms"
              style={{ marginLeft: "10px", fontSize: "12px" }}
            >
              I accept Terms & Conditions and Privacy Policy of Mondelez
              (Cadbury)
            </label>
          </div>
          <div style={{ marginTop: "10px", textAlign: "left" }}>
            <input
              type="checkbox"
              id="promotion"
              name="promotion"
              checked={promotion}
              onChange={handleChange}
            />
            <label
              htmlFor="promotion"
              style={{ marginLeft: "10px", fontSize: "12px" }}
            >
              I would like to receive promotional communication from Mondelez
              (Cadbury) about its products and offers.
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              background: "#e7b464",
              marginTop: "5px",
            }}
          >
            Submit
          </button>
        </form>
      </main>
      {registered && <OtpPopup />}
    </div>
  );
};

export default Registration;
