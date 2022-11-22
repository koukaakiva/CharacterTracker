import { useState } from "react";
import API from "../utils/ApiConfig";
import { useNavigate } from "react-router-dom";
//Free css template from Zach Saucier
import "../Styles/form.css";

export default function NewCharacter() {
  const params = new URLSearchParams(window.location.search);
  const novelID: string | null = params.get("novelID");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");
  const [isBiggerThanABreadBox, setIsBiggerThanABreadBox] = useState(false);
  const navigate = useNavigate();

  async function registerCharacter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    API.post("character/register", {
      name: name,
      description: description,
      quote: quote,
      isBiggerThanABreadBox: isBiggerThanABreadBox,
      fromNovelID: novelID,
    })
      .then(() => navigate(-1))
      .catch((error) => alert(error));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form role="characterRegisterForm" onSubmit={registerCharacter}>
        <h1>Register Character to ...</h1>
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Name"
          autoComplete="name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <textarea
          className="feedback-input"
          placeholder="Description"
          autoComplete="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Quote"
          autoComplete="quote"
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
          Register
        </button>
      </form>
    </div>
  );
}
