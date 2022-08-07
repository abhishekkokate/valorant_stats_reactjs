import "./App.css";
import ValorantIcon from "./assets/icons/valorantIcon.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={ValorantIcon} alt="Icon" />
        <h2>Valorant Agents</h2>
      </header>
    </div>
  );
}

export default App;
