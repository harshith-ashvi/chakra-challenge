import Card from "../card/Card";

const CardList = ({ className, items, handleCardClick }) => {
  return (
    <div className={`cardList flexGap ${className}`}>
      {items.map((item) => (
        <Card
          className="card"
          key={item.name}
          imageSRC={item.img}
          altText={item.name}
          color={item.color}
          height={150}
          width={150}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default CardList;
