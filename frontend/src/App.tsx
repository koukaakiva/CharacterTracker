import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Novels from "./Components/Novels";
import NewNovel from "./Components/NewNovel";
import NovelInfo from "./Components/NovelInfo";
import NewCharacter from "./Components/NewCharacter";
import Test from "./Components/Test";
import Characters from "./Components/Characters";
//Free CSS Templates from www.templatemo.com
import "./Styles/templatemo_style.css";
import CharacterInfo from "./Components/CharacterInfo";
import EditCharacter from "./Components/EditCharacter";

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
          <Route path="/Characters" element={<Characters />} />
          <Route path="NewCharacter" element={<NewCharacter />} />
          <Route path="/Character" element={<CharacterInfo />} />
          <Route path="EditCharacter" element={<EditCharacter />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
