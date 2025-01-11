import { Link } from "react-router-dom";

const SwiperCard = ({ _id, productImage, productTitle }) => {
  return (
    <Link to={`/product-detail/${_id}`}>
      <div className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
        <figure className="w-[282px] h-[300px] overflow-hidden">
          <img src={productImage} alt={productTitle} />
        </figure>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{productTitle}</h1>
        </div>
      </div>
    </Link>
  );
};

export default SwiperCard;
