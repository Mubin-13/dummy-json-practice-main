import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import Layout from "../../Layout/Layout";

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  console.log(cart);
  return (
    <Layout>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.images[1]} alt="" />
              <h1>{item.brand}</h1>
              <h1>{item.price}</h1>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Cart;
