import "../styles/welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="header">
        <h2 className="logo">dayloom.</h2>
      </div>

      <div className="welcome-cont">
        <h3 className="description">YOUR DAILY PLANNER</h3>
        <h1 className="title">Make room for what matters.</h1>

        <p className="descritption-2">
          Dayloom helps us to stay focused, build good habits, and make progress
          on what truly counts - school, exams, coding and your personal goals.
        </p>
        <button className="btn" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </div>
      <footer className="footer">A calmer way to organise your day.</footer>
    </div>
  );
};

export default Welcome;
