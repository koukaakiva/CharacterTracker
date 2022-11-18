import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Novels from "./Components/Novels";
import NewNovel from "./Components/NewNovel";

//Free CSS Templates from www.templatemo.com
import "./Styles/templatemo_style.css";

function App() {
  return (
    <div id="templatemo_container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Novels" element={<Novels />} />
          <Route path="/NewNovel" element={<NewNovel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
