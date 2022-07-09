import "../assets/css/cardGalery.css";

export const CardGalery = ({ height, title, information, image }) => {
  return (
    <div style={{ height: height }} className="container-card-galery">
      <img
        className="card-border__radius"
        src={image}
        alt="Galery1"
        style={{ height: "100%", width: "100%" }}
      />
      <div>
        <h4 className="title">{title}</h4>
        <p className="information">{information}</p>
      </div>
    </div>
  );
};
