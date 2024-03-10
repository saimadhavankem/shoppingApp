import { Component } from "react";
import "./index.css";
import ProductCard from "../ProductCard";

class Home extends Component {
  state = { productsList: [] };

  componentDidMount = () => {
    this.getDetailsList();
  };

  getDetailsList = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    const updatedData = data.map((each) => ({
      id: each.id,
      title: each.title,
      price: each.price,
      description: each.description,
      category: each.category,
      image: each.image,
      rating: each.rating.rate,
    }));
    this.setState({ productsList: updatedData });
  };

  render() {
    const { productsList } = this.state;
    return (
      <div className="main-container">
        <ul>
          {productsList.map((each) => (
            <ProductCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
