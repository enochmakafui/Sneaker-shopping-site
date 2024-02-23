import { useContext } from "react";
import { CartContext } from "../store/ShoppingCartContext";
import deleteImage from "../assets/icon-delete.svg";
export default function Cart() {
  const { items, deleteItemFromCart } = useContext(CartContext);
  return (
    <div>
      {items.length === 0 && (
        <p className="py-4 text-gray-500 text-center ">Your cart is empty </p>
      )}
      {items.length > 0 && (
        <>
          {items.map((product) => (
            <div
              className="flex items-center justify-between gap-4 mb-6"
              key={product.id}
            >
              <img
                src={product.image}
                alt={"sneaker "}
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p className="text-gray-500">{product.title}</p>
                <p className="text-gray-500">
                  {product.discountedPrice} x {product.itemQuantity}
                  <span className="text-black ms-2 text-lg font-bold">
                    $
                    {parseFloat(product.discountedPrice.replace("$", "")) *
                      product.itemQuantity}
                  </span>
                </p>
              </div>
              <button onClick={() => deleteItemFromCart(product.id)}>
                <img src={deleteImage} alt={"delete icon"} />
              </button>
            </div>
          ))}
          <button className="bg-orange-400 w-full text-white rounded-md py-2">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
