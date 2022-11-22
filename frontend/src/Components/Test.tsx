import API from "../utils/ApiConfig";
import { AxiosResponse } from "axios";

export default function Test() {
  async function test() {
    await API.get("test/getAll")
      .then()
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <button
      onClick={() => {
        test();
      }}
    >
      Test
    </button>
  );
}
