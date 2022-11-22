import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import Genre from "../Types/Genre";
import Novel from "../Types/Novel.type";
import CharacterBox from "./CharacterBox";
import AddCharacterBox from "./AddCharacterBox";
import image from "../Images/templatemo_image_02.jpg";
import { useNavigate } from "react-router-dom";

export default function NovelInfo() {
  const params = new URLSearchParams(window.location.search);
  const id: string | null = params.get("id");
  const [novel, setNovel] = useState<Novel>();
  const navigate = useNavigate();

  async function getNovel() {
    await API.get("novel/getByID?id=" + id)
      .then((response: AxiosResponse) => {
        setNovel(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("No novel found with id " + id + ". Redirectig...");
        navigate(-1);
      });
  }

  useEffect(() => {
    getNovel();
  }, []);

  return (
    <>
      <div id="templatemo_content_right" style={{ padding: "10px" }}>
        <h1>
          {novel?.title} <span>(by {novel?.author})</span>
        </h1>
        <div className="image_panel">
          <img src={image} width="100" height="150" />
        </div>
        <ul>
          <li>By {novel?.author}</li>
          <li>January 2024</li>
          <li>Pages: 498</li>
          <li>ISBN 10: 0-496-91612-0 | ISBN 13: 9780492518154</li>
        </ul>

        <p>{novel?.description}</p>

        <div className="cleaner_with_height">&nbsp;</div>
      </div>
      <div
        id="templatemo_content_right"
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          flexFlow: "column",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {novel?.characters?.map((character, i) => (
          <CharacterBox
            id={character.id}
            name={character.name}
            description={character.description}
            quote={character.quote}
            isBiggerThanABreadBox={character.isBiggerThanABreadBox}
            key={i}
          />
        ))}
        <AddCharacterBox novelID={id} />
      </div>
    </>
  );
}
