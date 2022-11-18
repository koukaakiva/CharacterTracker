import { useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
//Free css template from Zach Saucier
import "../Styles/form.css";
import Genre from "../Types/Genre";

export default function NewNovel() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState(Genre.NULL);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  async function registerNovel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    API.post("novel/register", {
      title: title,
      author: author,
      genre: genre,
      description: description,
    })
      .then(() => navigateTo("Novels"))
      .catch(() => alert("Error"));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form role="novelRegisterForm" onSubmit={registerNovel}>
        <h1>Register Novel</h1>
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Title"
          autoComplete="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <input
          className="feedback-input"
          type="text"
          placeholder="Author"
          autoComplete="author"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <br />
        {/* <input
          className="feedback-input"
          type="text"
          placeholder="Genre"
          autoComplete="genre"
          onChange={(event) => setGenre(event.target.value)}
        /> */}
        <select
          className="feedback-input"
          value={genre}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        >
          {Object.keys(Genre).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <br />
        <textarea
          className="feedback-input"
          placeholder="Description"
          autoComplete="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <button data-testid="submit-signup" type="submit">
          Register Novel
        </button>
      </form>
    </div>
  );
}
