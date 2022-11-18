import { useEffect } from "react";
import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";
import NovelBox from "./NovelBox";
import AddNovelBox from "./AddNovelBox";

export default function Novels() {
  async function getNovels() {
    await API.get("novel/getAll")
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
        <NovelBox
          title="The Title"
          author="The Author"
          description="The description"
        />
        <NovelBox
          title="The Title"
          author="The Author"
          description="The description"
        />
        <NovelBox
          title="The Title"
          author="The Author"
          description="The description"
        />
        <NovelBox
          title="The Title"
          author="The Author"
          description="The description"
        />
        <NovelBox
          title="The Title"
          author="The Author"
          description="The description"
        />
        <AddNovelBox />
      </div>
    </div>
  );
}
