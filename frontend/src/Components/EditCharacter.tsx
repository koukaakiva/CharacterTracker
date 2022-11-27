import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { useNavigate } from "react-router-dom";
//Free css template from Zach Saucier
import "../Styles/form.css";
import { AxiosResponse } from "axios";
import Novel from "../Types/Novel.type";

export default function EditCharacter() {
  const params = new URLSearchParams(window.location.search);
  const id: string | null = params.get("id");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [isBiggerThanABreadBox, setIsBiggerThanABreadBox] = useState(false);
  const [novelID, setNovelID] = useState<number>();
  const navigate = useNavigate();

  async function getCharacter() {
    await API.get("character/getByID?id=" + id)
      .then((response: AxiosResponse) => {
        setName(response.data.character.name);
        setDescription(response.data.character.description);
        setQuote(response.data.character.quote);
        setIsBiggerThanABreadBox(response.data.character.isBiggerThanABreadBox);
        setNovelID(response.data.novelID);
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

  async function editCharacter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    API.put("character/update", {
      id: id,
      name: name,
      description: description,
      quote: quote,
      isBiggerThanABreadBox: isBiggerThanABreadBox,
      novelID: novelID,
    })
      .then(() => {
        alert("Character edited.");
        navigate(-1);
      })
      .catch((error) => alert(error));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form role="characterEditForm" onSubmit={editCharacter}>
        <h1>Edit Character</h1>
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <textarea
          className="feedback-input"
          placeholder="Description"
          autoComplete="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Quote"
          autoComplete="quote"
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
        />
        <br />
        <div className="feedback-input">
          <span>Is the character bigger than a breadbox?</span>
          <input
            className="feedback-input"
            type="checkbox"
            checked={isBiggerThanABreadBox}
            onChange={(event) => setIsBiggerThanABreadBox(event.target.checked)}
          />
        </div>
        <button data-testid="submit-signup" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
}
