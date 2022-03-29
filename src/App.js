import "./App.css";
// import { Navber } from "./Components/Navber/Navber";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import Navber from "./Components/Navber/Navber";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Home />
    </div>
  );
}

export default App;
