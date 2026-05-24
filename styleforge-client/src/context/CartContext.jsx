import { useState }
  from "react";

import { CartContext }
  from "./cartContext";

const CartProvider = ({
  children,
}) => {

  const [cartItems, setCartItems] =
    useState(() => {

      const storedCart =
        localStorage.getItem("cart");

      return storedCart
        ? JSON.parse(storedCart)
        : [];
    });

  // Add To Cart
  const addToCart = (product) => {

    const exists =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    let updatedCart;

    if (exists) {

      updatedCart = cartItems.map(
        (item) =>
          item._id === product._id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
      );

    } else {

      updatedCart = [
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ];
    }

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Remove From Cart
  const removeFromCart = (id) => {

    const updatedCart =
      cartItems.filter(
        (item) => item._id !== id
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};

export default CartProvider;