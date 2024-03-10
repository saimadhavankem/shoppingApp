import { Link } from "react-router-dom";

import "./index.css";

const ProductCard = (props) => {
  const { details } = props;
  const { id, title, image, price, rating } = details;
  return (
    <Link to={`/products/${id}`} className="link-item">
      <li>
        <img src={image} alt={title} />
        <p className="title-text">{title}</p>
        <div className="text-box">
          <p>Rs: {price}</p>
          <p>{rating}</p>
        </div>
      </li>
    </Link>
  );
};

export default ProductCard;
