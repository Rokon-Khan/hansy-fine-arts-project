import { useNavigate } from "react-router-dom";
import "../App.css"; // Assuming the CSS you provided is in App.css

const Card = ({ image, category, author, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); // Navigate to the route specified for the card
  };
  return (
    <div className="pain-fram" onClick={handleClick}>
      <img src={image} alt={category} />
      <div className="paint-title">
        <h2 style={{ color: "teal" }}>{category}</h2>
        <p>
          <span style={{ color: "teal" }} className="lowercase text-2xl italic">
            by
          </span>{" "}
          {author}
        </p>
      </div>
    </div>
  );
};

const ShopArtCategory = () => {
  const cards = [
    {
      image: "./cuadro-horizontal-1.jpg", // Replace with actual paths
      category: "Contemporary",
      author: "Hans Yaeggy",
      route: "/contemporary",
    },
    {
      image: "./cuadro-horizontal-2.jpg",
      category: "Portrait",
      author: "Hans Yaeggy",
      route: "/custom-portrait",
    },
    {
      image: "./cuadro-horizontal-3.jpg",
      category: "Abstract & Design",
      author: "Hans Yaeggy",
      route: "/abstract-designs",
    },
  ];

  return (
    <div className="bg-banner_3 w-full bg-cover bg-fixed">
      <div className="my-10 max-w-7xl mx-auto p-10">
        <div className="new-arive new-ariver-gallery grid lg:grid-cols-3 grid-cols-1">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              author={card.author}
              route={card.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopArtCategory;
