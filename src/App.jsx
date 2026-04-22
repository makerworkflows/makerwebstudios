import { Routes, Route } from "react-router-dom";
import MainSite from "./pages/MainSite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
    </Routes>
  );
}

export default App;
