import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const cartHandler = (pd) => {
    const newCart = [...cart, pd];
    setCart(newCart);
  };

  console.log(cart);

  const getProducts = async () => {
    setLoading(true);
    await fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then((result) => {
        setProducts(result.products);
      });
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProductsContext.Provider
      value={{ products, isLoading, setLoading, cartHandler, cart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
