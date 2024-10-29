import "./App.css";
import ChallengeOne from "./pages/ChallengeOne";
import ChallengeThree from "./pages/ChallengeThree";
import ChallengeTwo from "./pages/ChallengeTwo";
import ChallengeFour from "./pages/ChallengeFour";
import ChallengeFive from "./pages/ChallengeFive";
import ChallengeSix from "./pages/ChallengeSix";
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
        <Route path="/challenge4" element={<ChallengeFour />} />
        <Route path="/challenge5" element={<ChallengeFive />} />
        <Route path="/challenge6" element={<ChallengeSix />} />
      </Routes>
      {!isHome && <Topbar />}
    </main>
  );
};

export default App;
