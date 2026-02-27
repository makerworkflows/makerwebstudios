import Layout from "../components/Layout";
import Home from "./Home";
import Services from "./Services";
import Process from "./Process";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

const MainSite = () => {
  return (
    <Layout>
      <Home />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <Contact />
    </Layout>
  );
};

export default MainSite;
