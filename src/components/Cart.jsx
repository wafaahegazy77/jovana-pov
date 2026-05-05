
export default function Cart({
  cart,
  updateQty,
  removeItem,
  total,
  clearCart,
  paymentMethod,
  setPaymentMethod
}) {
  return (
    <div className="cart">
      <h2>السلة</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>

          <div>
            <button onClick={() => updateQty(item.id, "dec")}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, "inc")}>+</button>
          </div>

          <span>{item.price * item.qty}</span>

          <button onClick={() => removeItem(item.id)}>x</button>
        </div>
      ))}

      <div className="payment">
        <label>
          <input
            type="radio"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />
          نقدي
        </label>

        <label>
          <input
            type="radio"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          بطاقة
        </label>
      </div>

      <h3>الإجمالي: {total} ر.س</h3>

      <button onClick={clearCart}>مسح السلة</button>
    </div>
  );
}
