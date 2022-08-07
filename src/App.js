import "./App.css";
import ValorantIcon from "./assets/icons/valorantIcon.png";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="background-watermark"></div>
      <Navbar />
      <div className="App-header">
        {/* <img src={ValorantIcon} alt="Icon" />
        <h2>Valorant Stats</h2> */}
      </div>
    </div>
  );
}

export default App;
