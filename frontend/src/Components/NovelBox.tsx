import image from "../Images/templatemo_image_01.jpg";

type Props = {
  title: string;
  author: string;
  description: string;
};

const NovelBox = ({ title, author, description }: Props) => {
  return (
    <div className="templatemo_product_box">
      <h1>
        {title} <span>(by {author})</span>
      </h1>
      <img src={image} alt="image" />
      <div className="product_info">
        <p>{description}</p>
        <div className="detail_button">
          <a href="subpage.html">Detail</a>
        </div>
      </div>
      <div className="cleaner">&nbsp;</div>
    </div>
  );
};
export default NovelBox;
