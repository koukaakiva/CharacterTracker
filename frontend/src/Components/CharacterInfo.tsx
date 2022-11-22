import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import image from "../Images/templatemo_image_02.jpg";
import { useNavigate } from "react-router-dom";
import Character from "../Types/Character.type";

export default function CharacterInfo() {
  const params = new URLSearchParams(window.location.search);
  const id: string | null = params.get("id");
  const [character, setCharacter] = useState<Character>();
  const navigate = useNavigate();

  async function getNovel() {
    await API.get("character/getByID?id=" + id)
      .then((response: AxiosResponse) => {
        setCharacter(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("No character found with id " + id + ". Redirectig...");
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
          {character?.name} <span>(from {character?.fromNovel?.title})</span>
        </h1>
        <div className="image_panel">
          <img src={image} width="100" height="150" />
        </div>
        <h2>
          <li>By {character?.quote}</li>
        </h2>
        <p>{character?.description}</p>

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
        {/* {character?.characters?.map((character, i) => (
          <CharacterBox
            id={character.id}
            name={character.name}
            description={character.description}
            quote={character.quote}
            isBiggerThanABreadBox={character.isBiggerThanABreadBox}
            key={i}
          />
        ))} */}
      </div>
    </>
  );
}
