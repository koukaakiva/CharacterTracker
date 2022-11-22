import image from "../Images/templatemo_image_01.jpg";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  description: string;
  quote: string;
  isBiggerThanABreadBox: boolean;
};

const CharacterBox = ({
  id,
  name,
  description,
  quote,
  isBiggerThanABreadBox,
}: Props) => {
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  return (
    <div className="templatemo_product_box">
      <h1>{name}</h1>
      <img src={image} alt="image" />
      <div className="product_info">
        <h2>
          "<i>{quote}</i>"
        </h2>
        <p>{description}</p>
        <div className="detail_button">
          <a onClick={() => navigateTo("Character?id=" + id)}>Detail</a>
        </div>
      </div>
      <div className="cleaner">&nbsp;</div>
    </div>
  );
};
export default CharacterBox;
