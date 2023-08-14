import Card from "../card/Card";

const CardList = ({ items, handleCardClick }) => {
  return (
    <div className="flex-center flexGap cardList">
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
