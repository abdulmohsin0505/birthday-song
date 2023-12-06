import celebration_img from "../../assets/images/Celebrations(Bg) - hashtag.png";
import { Link } from "react-router-dom";
import "./landingPage.css";

function LandingPage() {
  return (
    <main style={{ marginTop: "100px" }}>
      <div>
        <img
          src={celebration_img}
          className="celebration_img"
          alt="celebration_img"
        />
        <p>A unique birthday song for everyone!</p>
        <p>इस birthday,कुछ अच्छा हो जाए</p>
        <h2>Welcome, Rhea!</h2>
        <button className="continue_btn">
          <Link to={"detail"}>Continue</Link>
        </button>
        <br />
        <Link to={"registration"} className="signup_link">
          Signup
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
