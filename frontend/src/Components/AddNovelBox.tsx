import plus from "../Images/plus.png";

export default function AddNovelBox() {
  return (
    <div className="templatemo_product_box">
      <h1>Add Novel</h1>
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
    </div>
  );
}
