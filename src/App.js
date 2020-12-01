import './App.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <About/>
        <Work/>
        <Contact/>
    </div>
  );
}

export default App;
