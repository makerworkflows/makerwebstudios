import { Routes, Route } from 'react-router-dom';
import MainSite from './pages/MainSite';
import GrowthEngine from './pages/GrowthEngine';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/growth" element={<GrowthEngine />} />
    </Routes>
  );
}

export default App;
