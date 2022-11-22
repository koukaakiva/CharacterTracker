import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import CharacterBox from "./CharacterBox";
import Character from "../Types/Character.type";

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getCharacters() {
    await API.get("character/getAll")
      .then((response: AxiosResponse) => {
        setCharacters(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setCharacters([]);
      });
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "0" }}>
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
        {characters.map((character, i) => (
          <CharacterBox
            id={character.id}
            name={character.name}
            description={character.description}
            quote={character.quote}
            isBiggerThanABreadBox={character.isBiggerThanABreadBox}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
