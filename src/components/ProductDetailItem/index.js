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
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const url = `https://fakestoreapi.com/products/${id}`;
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
        <h1>qef</h1>
        <div className="left-container">
          <img src={image} alt={title} />
        </div>
        <div className="right-container">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetailItem;
