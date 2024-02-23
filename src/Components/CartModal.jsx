import { createPortal } from "react-dom";
import Cart from "./Cart";

export default function CartModal({ onClose }) {
  function handleModalClose() {
    onClose();
  }
  function handleModalClick(event){
    event.stopPropagation()
  }
  return createPortal(
    <div
      className="fixed inset-0 flex justify-center items-start z-40 bg-black bg-opacity-50"
      onClick={handleModalClose}
    >
      <div className="bg-white rounded-md p-4 max-w-md mt-16 me-2 w-[80%]" onClick={handleModalClick}>
        <h1 className="text-lg  mb-4 border-b border-gray-300"> Cart</h1>
        <Cart />
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
