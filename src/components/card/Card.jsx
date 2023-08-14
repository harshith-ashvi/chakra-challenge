import "./card.css";

const Card = ({
  imageSRC,
  altText,
  color,
  width = 200,
  height = 200,
  handleCardClick,
}) => {
  return (
    <div
      className={`card ${color}`}
      onClick={() => handleCardClick(altText)}
      role="button"
    >
      <img src={imageSRC} alt={altText} />
      <div className="textContent">
        <p>{altText} Nature</p>
      </div>
    </div>
  );
};

export default Card;
