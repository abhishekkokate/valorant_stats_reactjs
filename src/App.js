import "./App.css";
import ValorantIcon from "./assets/icons/valorantIcon.png";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="background-watermark"></div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
