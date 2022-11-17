import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  return (
    <div id="templatemo_menu">
      <ul>
        <li>
          <a className="current" onClick={() => navigateTo("")}>
            Home
          </a>
        </li>
        <li>
          <a onClick={() => navigateTo("Novels")}>Novels</a>
        </li>
        <li>
          <a onClick={() => navigateTo("Characters")}>Characters</a>
        </li>
        <li>
          <a onClick={() => navigateTo("Search")}>Search</a>
        </li>
      </ul>
    </div>
  );
}
