import Home from './Components/Pages/Home';
import './App.css';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
