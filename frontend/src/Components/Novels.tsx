import { useEffect, useState } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import NovelBox from "./NovelBox";
import AddNovelBox from "./AddNovelBox";
import Genre from "../Types/Genre";
import Novel from "../Types/Novel";

export default function Novels() {
  const [novels, setNovels] = useState<Novel[]>([]);

  async function getNovels() {
    await API.get("novel/getAll")
      .then((response: AxiosResponse) => {
        setNovels(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNovels([]);
      });
  }

  useEffect(() => {
    getNovels();
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
        {novels.map((novel, i) => (
          <NovelBox
            title={novel.title}
            author={novel.author}
            description={novel.description}
            key={i}
          />
        ))}
        <AddNovelBox />
      </div>
    </div>
  );
}
