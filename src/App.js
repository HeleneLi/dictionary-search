import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sea"/>
      </main>
      <footer className="text-center">
        Coded by Helene Lipp
      </footer>
      </div>
    </div>
  );
}

export default App;
