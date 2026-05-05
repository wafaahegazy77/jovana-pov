
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
      <div className="cart_box">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span className="name">{item.name}</span>

            <div className="act_btuns">
              <button onClick={() => updateQty(item.id, "dec")}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, "inc")}>+</button>
            </div>

            <span>{item.price * item.qty} <small> ر.س  </small> </span>

            <button className="removerButn" onClick={() => removeItem(item.id)}>x</button>
          </div>
        ))}

        <div className="cart_box_foot">
          <h3> اجمالي الفاتورة: {total} ر.س</h3>
          <button onClick={clearCart}>مسح السلة</button>
        </div>
      </div>

      <div className="payment">
        <span> <b> اختر طريقة الدفع  : </b> </span>
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

      
      
    </div>
  );
}
