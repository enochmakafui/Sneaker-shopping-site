import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/ShoppingCartContext";
import menuOpenImage from "../assets/icon-menu.svg";
import cartImage from "../assets/icon-cart.svg";
import humanAvatarImage from "../assets/image-avatar.png";
import sneakerLogo from "../assets/logo.svg";
import CartModal from "./CartModal";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;

  function handleModalOpen() {
    setModalIsOpen(true);
  }
  function handleModalClose() {
    setModalIsOpen(false);
  }
  function handleMenuOpen() {
    setMenuIsOpen(true);
  }
  function handleMenuClose() {
    setMenuIsOpen(false);
  }
  return (
    <>
      {modalIsOpen ? <CartModal onClose={handleModalClose} /> : null}
      {menuIsOpen ? <SideMenu onClose={handleMenuClose} /> : null}
      <div className="bg-navColor-hsl flex py-4 ps-4 w-full justify-between  h-14 ">
        <div className="flex  justify-between items-center gap-4 ">
          <button
            className=" outline-none border-none  flex align-center py-1"
            onClick={handleMenuOpen}
          >
            <img src={menuOpenImage} alt="a hamburger menu" className=" h-4" />
          </button>
          <Link to="/">
            <img src={sneakerLogo} alt="a logo text" className="w-18" />
          </Link>
        </div>
        <div className="flex gap-4 pe-2 justify-end  items-center">
          <button className="relative " onClick={handleModalOpen}>
            <img
              src={cartImage}
              alt=" a shopping basket "
              className="w-6 h-6"
            />
            <p className="absolute left-1/2 -top-2 bg-orange-400 px-2 text-xs rounded-md text-navColor-hsl">
              {cartQuantity}
            </p>
          </button>
          <img
            src={humanAvatarImage}
            alt="a man with long hairs"
            className="w-8 h-8"
          />
        </div>
      </div>
    </>
  );
}
