import Pot from "../assets/pot.png";
import { useState } from "react";
import "../styles/signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signup">
      <img src={Pot} alt="pot" className="pot" />
      <h2 className="title">Let's make it yours.</h2>
      <p className="subtext">
        Create an account to start making space for what matters.
      </p>
      <label className="name">Your Name</label>
      <input
        type="name"
        name="name"
        required
        className="input"
        placeholder="What should we call you?"
      />
      <label className="email">Email</label>
      <input
        type="email"
        name="email"
        required
        className="input"
        placeholder="example@gmail.com"
      />
      <label className="password">Password</label>
      <input
        type="name"
        placeholder="Create a secure password."
        name="password"
        required
        className="input"
      />
      <button className="btn-signup">Create my account</button>
      <p className="subtext">
        Already have an account?{" "}
        <a href="/login" className="subtext-link">
          Log in
        </a>
      </p>
      <footer className="footer">A little progress, one day at a time.</footer>
    </div>
  );
};

export default SignUp;
