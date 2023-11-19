import { Link } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import { useContext } from "react";

const ProductsCart = ({ product }) => {
  const { brand, images, price, category, id } = product;
  const {cartHandler}=useContext(ProductsContext)
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            width="200px"
            height="200px"
            src={images[1]}
            alt="Product Image"
          />
        </figure>
        <div className="card-body h-56">
          <h2 className="card-title">
            {brand}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <div
              onClick={() => cartHandler(product)}
              className="btn btn-sm btn-outline"
            >
              Add to cart
            </div>
            <Link to={`/product/${id}`} className="btn btn-sm btn-outline">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
