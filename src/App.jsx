import './App.css';
import ChallengeOne from './pages/ChallengeOne';
import ChallengeThree from './pages/ChallengeThree';
import ChallengeTwo from './pages/ChallengeTwo';
import ChallengeFour from './pages/ChallengeFour';
import ChallengeFive from './pages/ChallengeFive';
import ChallengeSix from './pages/ChallengeSix';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Topbar from './Topbar';
import ChallengeSeven from './pages/ChallengeSeven';
import ChallengeEight from './pages/ChallengeEight';
import ChallengeNine from './pages/ChallengeNine';
import ChallengeTen from './pages/ChallengeTen';
import ChallengeEleven from './pages/ChallengeEleven';
import ChallengeTwelve from './pages/ChallengeTwelve';
import ChallengeThirteen from './pages/ChallengeThirteen';
import ChallengeFourteen from './pages/ ChallengeFourteen';
import ChallengeFifteen from './pages/ChallengeFifteen';
import ChallengeSixteen from './pages/ChallengeSixteen';
import ChallengeSeventeen from './pages/ChallengeSeventeen';

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className='content'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/challenge1' element={<ChallengeOne />} />
        <Route path='/challenge2' element={<ChallengeTwo />} />
        <Route path='/challenge3' element={<ChallengeThree />} />
        <Route path='/challenge4' element={<ChallengeFour />} />
        <Route path='/challenge5' element={<ChallengeFive />} />
        <Route path='/challenge6' element={<ChallengeSix />} />
        <Route path='/challenge7' element={<ChallengeSeven />} />
        <Route path='/challenge8' element={<ChallengeEight />} />
        <Route path='/challenge9' element={<ChallengeNine />} />
        <Route path='/challenge10' element={<ChallengeTen />} />
        <Route path='/challenge11' element={<ChallengeEleven />} />
        <Route path='/challenge12' element={<ChallengeTwelve />} />
        <Route path='/challenge13' element={<ChallengeThirteen />} />
        <Route path='/challenge14' element={<ChallengeFourteen />} />
        <Route path='/challenge15' element={<ChallengeFifteen />} />
        <Route path='/challenge16' element={<ChallengeSixteen />} />
        <Route path='/challenge17' element={<ChallengeSeventeen />} />
      </Routes>
      {!isHome && <Topbar />}
    </main>
  );
};

export default App;
