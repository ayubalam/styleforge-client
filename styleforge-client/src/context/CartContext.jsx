import {
  useState,
} from "react";

import {
  CartContext,
} from "./cartContext";

const CartProvider =
  ({ children }) => {

    const [cartItems,
      setCartItems] =
      useState(() => {

        const storedCart =
          localStorage.getItem(
            "cart"
          );

        return storedCart
          ? JSON.parse(
              storedCart
            )
          : [];
      });

    // Add To Cart
    const addToCart =
      (product) => {

        const existItem =
          cartItems.find(
            (item) =>
              item._id ===
              product._id
          );

        let updatedCart;

        if (existItem) {

          updatedCart =
            cartItems.map(
              (item) =>

                item._id ===
                product._id
                  ? {
                      ...item,
                      qty:
                        item.qty + 1,
                    }
                  : item
            );

        } else {

          updatedCart = [
            ...cartItems,

            {
              _id:
                product._id,

              product:
                product._id,

              title:
                product.title,

              image:
                product.image,

              price:
                product.price,

              qty: 1,
            },
          ];
        }

        setCartItems(
          updatedCart
        );

        localStorage.setItem(
          "cart",
          JSON.stringify(
            updatedCart
          )
        );
      };

    // Remove
    const removeFromCart =
      (id) => {

        const updatedCart =
          cartItems.filter(
            (item) =>
              item._id !== id
          );

        setCartItems(
          updatedCart
        );

        localStorage.setItem(
          "cart",
          JSON.stringify(
            updatedCart
          )
        );
      };

    // Clear
    const clearCart =
      () => {

        setCartItems([]);

        localStorage.removeItem(
          "cart"
        );
      };

    return (

      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
        }}
      >

        {children}

      </CartContext.Provider>
    );
  };

export default CartProvider;