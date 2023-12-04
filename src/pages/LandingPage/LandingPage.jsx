import celebration_img from "../../assets/images/Celebrations(Bg) - hashtag.png";

function LandingPage() {
  return (
    <main>
      <div className="background_circle circle_one"></div>
      <div className="background_circle circle_two"></div>
      <div className="background_circle circle_three"></div>
      <div className="background_circle circle_four"></div>
      <div className="background_circle circle_five"></div>
      <div className="upper_layer">
      <img src={celebration_img} className="celebration_img"/>
      <p></p>
      <p></p>
      <p></p>
      <button>Continue</button>
      <p>Signup</p>
      </div>
    </main>
  )
}

export default LandingPage