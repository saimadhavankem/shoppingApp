import { Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailItem from "./components/ProductDetailItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/products/:id" component={ProductDetailItem} />
      </Routes>
    </Router>
  );
}

export default App;
