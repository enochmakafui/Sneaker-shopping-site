import { useState } from "react";
import shoeProducts from "../shoeProducts";
import AddQuantity from "./AddQuantity";
import AddToCart from "./AddToCart";
import Carrousel from "./Carrousel";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);
  function handleIncreaseQuantity() {
    setItemQuantity((prevItem) => prevItem + 1);
  }
  function handleDecreaseQuantity() {
    setItemQuantity((prevItem) => (prevItem > 1 ? prevItem - 1 : prevItem));
  }
  return (
    <>

      <Carrousel id={id} />
      <div className="flex  flex-col px-4">
        <h3 className="uppercase font-bold text-xs text-orange-400 py-1">
          {" "}
          Sneaker Company
        </h3>
        <h2 className="font-bold text-xl py-2">{shoeProducts[0].title}</h2>
        <p className="text-sm text-gray-500">{shoeProducts[0].description}</p>
        <menu className="flex items-center justify-between  py-2">
          <li className="font-bold text-xl ">
            {shoeProducts[0].discountedPrice}{" "}
            <span className="text-sm font-normal ms-3 text-orange-400 px-1 py-1 rounded-md text bg-slate-200">
              {shoeProducts[0].discount}
            </span>
          </li>
          <li className="text-sm line-through text-gray-500">
            {shoeProducts[0].price}
          </li>
        </menu>
      <AddQuantity
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        itemQuantity={itemQuantity}
      
      />

      <AddToCart id={id} itemQuantity={itemQuantity} />
    </div>
    </>


  );
}
