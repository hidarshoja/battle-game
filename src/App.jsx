import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TransitionPage from "./pages/TransitionPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Router>
      <div className=" w-full h-screen p-3 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transition" element={<TransitionPage />} />
          <Route path="/gamePage" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
