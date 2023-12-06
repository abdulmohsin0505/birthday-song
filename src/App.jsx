import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div className="app">
      <div className="background_circle circle_one"></div>
      <div className="background_circle circle_two"></div>
      <div className="background_circle circle_three"></div>
      <div className="background_circle circle_four"></div>
      <div className="background_circle circle_five"></div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
