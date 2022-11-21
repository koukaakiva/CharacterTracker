import { useNavigate } from "react-router-dom";
import plus from "../Images/plus.png";

type Props = {
  novelID: string | null;
};

const AddCharacterBox = ({ novelID }: Props) => {
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  return (
    <a
      className="templatemo_product_box"
      onClick={() => navigateTo("NewCharacter?novelID=" + novelID)}
    >
      <h1>Add Character</h1>
      <div style={{ width: "100%", textAlign: "center", display: "flex" }}>
        <img
          src={plus}
          style={{
            width: "50%",
            objectFit: "contain",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        />
      </div>
      <div className="cleaner">&nbsp;</div>
    </a>
  );
};

export default AddCharacterBox;
