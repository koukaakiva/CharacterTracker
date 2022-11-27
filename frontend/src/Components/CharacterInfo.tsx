import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import image from "../Images/templatemo_image_02.jpg";
import { useNavigate } from "react-router-dom";
import Character from "../Types/Character.type";
import "../Styles/form.css";

export default function CharacterInfo() {
  const params = new URLSearchParams(window.location.search);
  const id: string | null = params.get("id");
  const [character, setCharacter] = useState<Character>();
  const [novelID, setNovelId] = useState<number>();
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  async function getCharacter() {
    await API.get("character/getByID?id=" + id)
      .then((response: AxiosResponse) => {
        setCharacter(response.data.character);
        setNovelId(response.data.novelID);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("No character found with id " + id + ". Redirectig...");
        navigate(-1);
      });
  }

  useEffect(() => {
    getCharacter();
  }, []);

  async function deleteCharacter() {
    await API.delete("character/delete?id=" + id)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        alert("Character deleted.");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        alert("Character could not be deleted. Error: " + error);
      });
  }

  return (
    <>
      <div id="templatemo_content_right" style={{ padding: "10px" }}>
        <h1>
          {character?.name}{" "}
          {/*<span>(from {character?.fromNovel?.title})</span> */}
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
        <span>
          <button
            className="feedback-input"
            onClick={() => {
              navigateTo("EditCharacter?id=" + id);
            }}
          >
            Edit
          </button>
          <button
            className="feedback-input"
            onClick={() => {
              deleteCharacter();
            }}
          >
            Delete
          </button>
        </span>
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
