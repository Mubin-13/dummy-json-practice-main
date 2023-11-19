import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";

const ProductsDetails = () => {
  const [singleProducts, setSingleProducts] = useState([]);
  const { cartHandler } = useContext(ProductsContext);
  const { id } = useParams();

  const getSingleProducts = async (id) => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setSingleProducts(result));
  };

  useEffect(() => {
    getSingleProducts(id);
  }, []);

  return (
    <Layout>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={singleProducts.thumbnail}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{singleProducts.brand}</h1>
            <p className="py-6">{singleProducts.description}</p>
            <button
              onClick={() => cartHandler(singleProducts)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetails;
