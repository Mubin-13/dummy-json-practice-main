import { useContext } from "react";
import Layout from "../../Layout/Layout";
import ProductsCart from "./ProductsCart";
import { ProductsContext } from "../../Context/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {products?.map((product) => {
          return <ProductsCart key={product.id} product={product} />;
        })}
      </div>
    </Layout>
  );
};

export default Products;
