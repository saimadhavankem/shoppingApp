import { Component } from "react";
import "./index.css";

class ProductDetailItem extends Component {
  state = { productData: {} };

  componentDidMount = () => {
    this.getProductData();
  };

  getUpdates = (data) => ({
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
    rating: data.rating.rate,
  });

  getProductData = async () => {
    const { num } = this.props;
    console.log(num);
    const url = `https://fakestoreapi.com/products/${num}`;
    const response = await fetch(url);
    const productData = await response.json();
    const formatData = this.getUpdates(productData);
    this.setState({ productData: formatData });
  };

  render() {
    const { productData } = this.state;
    const {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    } = productData;
    return (
      <div className="card-container">
        <div className="left-container">
          <img className="image-size" src={image} alt={title} />
        </div>
        <div className="right-container">
          <div className="text-page">
            <p>{title}</p>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
          </div>
          <div className="cart-page">
            <p className="price-text">Rs: {price}</p>
            <button className="btn-cart">Add to Cart</button>
            <button className="btn-buy">Buy Now</button>
            <button className="btn-wish">Add to Wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailItem;
