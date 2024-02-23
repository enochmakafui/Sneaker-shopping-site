import { useReducer } from "react";
import { createContext } from "react";
import shoeProducts from "../shoeProducts";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
});
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (product) => product.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        itemQuantity: action.payload.itemQuantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = shoeProducts.find(
        (product) => product.id === action.payload.id
      );
      product.itemQuantity = action.payload.itemQuantity;
      updatedItems.push(product);
    }
    return {
      items: updatedItems,
    };
  }
  if (action.type === "DELETE_ITEM") {
    return {
      items: state.items.filter((product) => product.id !== action.payload),
    };
  }
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );
  function handleAddItemToCart(id, itemQuantity) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: id,
        itemQuantity: itemQuantity,
      },
    });
  }
  function handleDeleteFromCart(id) {
    shoppingCartDispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }

  const ctxValues = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    deleteItemFromCart: handleDeleteFromCart,
  };
  return (
    <CartContext.Provider value={ctxValues}>{children}</CartContext.Provider>
  );
}
