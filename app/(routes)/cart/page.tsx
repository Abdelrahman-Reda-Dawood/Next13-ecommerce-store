"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

export const revalidate = 0;

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Container>
      <div className="px-4 py-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold ">Shopping Cart</h1>
        <div className="lg:col-span-7">
          {cart.items.length === 0 && <p>No items added to cart</p>}
          <ul>
            {cart.items.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
        </div>
        <Summary />
      </div>
    </Container>
  );
};

export default CartPage;
