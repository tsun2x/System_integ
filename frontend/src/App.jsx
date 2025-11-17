import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import LoginPage from "./pages/login_page";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/workout";
import StatisticsPage from "./pages/statistics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/workout" element={<WorkoutPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
    </Routes>
  );
}

export default App;
