//import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Project from './components/Projects';
import Academic from './components/Academics';


function App() {
  return (
    <div className="App">
      <Header />
      <Academic/>
      <Project />
    </div>
  );
}

export default App;
