import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
