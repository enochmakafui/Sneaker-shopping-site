import shoeProducts from "../shoeProducts";
import Product from "./Product";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>

      <h1 className="text-2xl  text-center mb-8 font-sans">Today's Picks</h1>
      <ul className="flex justify-center flex-wrap">
        {shoeProducts.map((product) => (
          <li key={product.id} className="w-1/2 p-2 ">
            <Link to={`/product/${product.id}`}>
              <Product {...product} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
