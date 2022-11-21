import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Novels from "./Components/Novels";
import NewNovel from "./Components/NewNovel";
import NovelInfo from "./Components/NovelInfo";
import NewCharacter from "./Components/NewCharacter";

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
          <Route path="/Novel" element={<NovelInfo />} />
          <Route path="NewCharacter" element={<NewCharacter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
