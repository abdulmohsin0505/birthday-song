import "./OtpPopup.css";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OtpPopup = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitOtp = () => {
    if (otp === "1234") {
      navigate("/detail");
    }
  };
  return (
    <div className="conatiner">
      <div className="popup">
        <div className="popup_inner">
          <h2 className="popup_heading">Enter OTP</h2>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={"otp_inputs"}
            containerStyle={"input_container"}
          />

          <Link to={""} className="resend_otp">
            Resend OTP
          </Link>
          <br />
          <button className="submit_btn" onClick={submitOtp}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPopup;
