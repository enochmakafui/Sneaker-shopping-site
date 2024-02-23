import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import menuClose from "../assets/icon-close.svg";

export default function SideMenu({ onClose }) {
  function handleOnClose() {
    onClose();
  }
  function handleMenuPageClick(event) {
    event.stopPropagation();
  }
  return createPortal(
    <div
      className="fixed  bg-black bg-opacity-50 inset-0 flex justify-start z-50 "
      onClick={handleOnClose}
    >
      <div className="bg-white p-4 w-2/5" onClick={handleMenuPageClick}>
        <button onClick={handleOnClose}>
          <img src={menuClose} alt="close menu button" />
        </button>
        <ul className="flex flex-col my-4 gap-3">
          <li className="font-bold text-lg text-black">
            <Link to="/collections">Collections</Link>
          </li>
          <li className="font-bold text-lg text-black">
            <Link to="/men">Men</Link>
          </li>
          <li className="font-bold text-lg text-black">
            <Link to="/women">Women</Link>
          </li>
          <li className="font-bold text-lg text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold text-lg text-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("side-menu-root")
  );
}
