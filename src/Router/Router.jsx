import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import Products from "../component/Products/Products";
import ProductsDetails from "../component/Products/ProductsDetails";
import Cart from "../component/Products/Cart";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
