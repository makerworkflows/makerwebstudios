import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
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
}

export default App;
