import { useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";

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
                  backgroundImage:
                    'url("//cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011_1280.jpg")',
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
                  backgroundImage:
                    'url("//cdn.pixabay.com/photo/2016/12/04/02/01/celtic-woman-1880944_1280.jpg")',
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
