import image from "../Images/templatemo_image_01.jpg";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  author: string;
  description: string;
};

const NovelBox = ({ id, title, author, description }: Props) => {
  const navigate = useNavigate();

  function navigateTo(destination: string) {
    navigate("/" + destination);
    window.location.reload();
  }

  return (
    <div className="templatemo_product_box">
      <h1>
        {title} <span>(by {author})</span>
      </h1>
      <img src={image} alt="image" />
      <div className="product_info">
        <p>{description}</p>
        <div className="detail_button">
          <a onClick={() => navigateTo("Novel?id=" + id)}>Detail</a>
        </div>
      </div>
      <div className="cleaner">&nbsp;</div>
    </div>
  );
};
export default NovelBox;
