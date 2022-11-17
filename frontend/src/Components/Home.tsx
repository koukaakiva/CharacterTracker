import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import atlas from "../Images/atlas.jpg";
import celtic_woman from "../Images/celtic_woman.jpg";

export default function Home() {
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  return (
    <>
      <HomeHeader />
      <div
        id="templatemo_content_right"
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          flexFlow: "column",
          display: "flex",
        }}
      >
        <table style={{ textAlign: "center" }}>
          <td>
            <a onClick={() => navigateTo("Novels")}>
              <div
                id="image-circle"
                style={{
                  display: "inline-block",
                  backgroundImage: `url(${atlas})`,
                }}
              />
              <h2>Novels</h2>
            </a>
          </td>
          <td>
            <a onClick={() => navigateTo("Characters")}>
              <div
                id="image-circle"
                style={{
                  display: "inline-block",
                  backgroundImage: `url(${celtic_woman})`,
                }}
              />
              <h2>Characters</h2>
            </a>
          </td>
        </table>
      </div>
    </>
  );
}
