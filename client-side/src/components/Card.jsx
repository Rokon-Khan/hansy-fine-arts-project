import { Link, useLocation } from "react-router-dom";
const Card = ({ product, handleRemove }) => {
  const { pathname } = useLocation();
  const { _id, title, productImage, category, price } = product || {};

  return (
    <div className="flex relative">
      <Link
        to={`/product/${_id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className=" w-[282px] h-[300px] overflow-hidden">
          <img className="" src={productImage} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-2xl font-bold">Price: ${price}</p>
          <button
            to={`/product/${_id}`}
            className="btn text-lg text-purple-600 rounded-full border-2 border-purple-600"
          >
            View Details
          </button>
        </div>
      </Link>
      {pathname === "/cart" && (
        <div
          onClick={() => handleRemove(_id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        ></div>
      )}
    </div>
  );
};

export default Card;
