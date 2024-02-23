import { useState } from "react";
import shoeProducts from "../shoeProducts";

export default function Carrousel({ id }) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const product = shoeProducts.find((product) => product.id === id);
  function handleNext() {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex + 1) % product.otherImages.length
    );
  }
  function handlePrev() {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? product.otherImages.length - 1 : prevIndex - 1
    );
  }
  const prev = "<";
  const next = ">";

  return (
    <div className="relative ">
      <div className="flex items-center justify-center  ">
        <img
          src={product.otherImages[currentProductIndex]}
          alt={"product one"}
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-navColor-hsl p-4 font-bold rounded-full w-14 h-14"
          onClick={handlePrev}
        >
          {prev}
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-navColor-hsl p-4 font-bold rounded-full w-14 h-14"
          onClick={handleNext}
        >
          {next}
        </button>
      </div>
    </div>
  );
}
