import { Routes, Route } from "react-router-dom";
import MainSite from "./pages/MainSite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
    </Routes>
  );
}

export default App;
