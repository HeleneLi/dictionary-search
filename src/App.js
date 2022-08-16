import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";
import Main from "./video";

function App() {
  return (
    <div>
      <Main />
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sea"/>
      </main>
      <footer className="text-center">
        Coded by
            <a href="https://linkedin.com/in/Helene-Lipp" target="_blank" rel="noreferrer">Helene Lipp
        </a>
      </footer>
      </div>
    </div>
    </div>
  );
}

export default App;
