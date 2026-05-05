import { useEffect, useState } from "react";
import { products } from "./data/products";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Receipt from "./components/Receipt";
import { loadCart, saveCart } from "./utils/storage";
import { generateInvoiceId } from "./utils/helpers";

export default function App() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [invoiceId, setInvoiceId] = useState(null);

  useEffect(() => setCart(loadCart()), []);
  useEffect(() => saveCart(cart), [cart]);

  const addToCart = (p) => {
    setCart(prev => {
      if (prev.length === 0) {
        setInvoiceId(generateInvoiceId());
      }

      const ex = prev.find(i => i.id === p.id);
      if (ex) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const updateQty = (id, t) => {
    setCart(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, qty: t === "inc" ? i.qty + 1 : i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const clearCart = () => {
    setCart([]);
    setInvoiceId(null);
  };

  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);

  return (
    <div className="app">
      <div className="left">
        <Products products={products} addToCart={addToCart} />
      </div>

      <div className="right">
        <Cart
          cart={cart}
          updateQty={updateQty}
          removeItem={removeItem}
          total={total}
          clearCart={clearCart}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />

        <Receipt
          cart={cart}
          total={total}
          invoiceId={invoiceId}
          paymentMethod={paymentMethod}
        />
      </div>
    </div>
  );
}