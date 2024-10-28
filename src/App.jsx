import "./App.css";
import ChallengeOne from "./pages/ChallengeOne";
import ChallengeThree from "./pages/ChallengeThree";
import ChallengeTwo from "./pages/ChallengeTwo";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./Topbar";

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="content">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/challenge1" element={<ChallengeOne />} />
        <Route path="/challenge2" element={<ChallengeTwo />} />
        <Route path="/challenge3" element={<ChallengeThree />} />
      </Routes>{" "}
      {!isHome && <Topbar />}
    </main>
  );
};

export default App;
