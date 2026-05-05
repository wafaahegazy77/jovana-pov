
import { getCurrentDate } from "../utils/helpers";
import { useState } from "react";

export default function Receipt({ cart, total, invoiceId, paymentMethod }) {
  const [mode, setMode] = useState("client");

  const format = (n) => n.toFixed(2);

  const printClient = () => {
    setMode("client");
    setTimeout(() => window.print(), 100);
  };

  const printKitchen = () => {
    setMode("kitchen");
    setTimeout(() => window.print(), 100);
  };

  return (
    <div className="receipt" id="receipt">

      <div className="center">
        <div>مطعم  جوفانا </div>
        <div>  ينبع - حي الصريف <br/> شارع عمر بن عبد العزيز  </div>
        <div>TEL  : +966507444114</div>
        <div>VAT No    : 311404588400003</div>
        <div> TIN    : 311404588400003 </div>
        <div> LIC No    : 7032640521 </div>
      </div>

      <hr />

      <div className="center bold">
        {mode === "client" ? "فاتورة عميل" : "فاتورة مطبخ"}
      </div>

      <div className="row-between">
        <span>رقم الفاتورة</span>
        <span>{invoiceId}</span>
      </div>

      <div className="row-between">
        <span>التاريخ</span>
        <span>{getCurrentDate()}</span>
      </div>

      {mode === "client" && (
        <div className="row-between">
          <span>طريقة الدفع</span>
          <span>{paymentMethod === "cash" ? "نقدي" : "بطاقة"}</span>
        </div>
      )}

      <hr />

      <div className="table simple">
        <div>الصنف</div>
        {mode === "client" && <div>سعر</div>}
        <div>عدد</div>
        {mode === "client" && <div>الإجمالي</div>}
      </div>

      <hr />

      {cart.map(item => (
        <div key={item.id} className="table simple">
          <div className="name">{item.name}</div>
          {mode === "client" && <div>{format(item.price)}</div>}
          <div>{item.qty}</div>
          {mode === "client" && <div>{format(item.price * item.qty)}</div>}
        </div>
      ))}

      {mode === "client" && (
        <>
          <hr />
          <div className="row-between bold">
            <span>المجموع</span>
            <span>{format(total)} ر.س</span>
          </div>
        </>
      )}

      <hr />

      <div className="center">شكراً لزيارتكم ❤️</div>

      <div className="print_butns no-print">
        <button onClick={printClient}>طباعة للعميل</button>
        <button onClick={printKitchen}>طباعة للمطبخ</button>
      </div>

    </div>
  );
}
