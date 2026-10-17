import "./App.css";
import Welcome from "./components/welcome";
import SignUp from "./components/signup";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Welcome />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
