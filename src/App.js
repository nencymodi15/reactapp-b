//import logo from './logo.svg';

import './App.css';
import Baseinfo from './components/Baseinfo';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Baseinfo />
      <Projects />
      <Academics />
      <Experience />
      <Skills />
      <Certificates />
      <Footer/>
    </div>
  );
}

export default App;
