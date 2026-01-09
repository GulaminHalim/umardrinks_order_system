import React, { forwardRef } from "react";

const Receipt = forwardRef(({ order }, ref) => {
  return (
    <div
      ref={ref}
      style={{ width: "280px", padding: "10px", fontSize: "12px" }}
    >
      <h5 style={{ textAlign: "center" }}>UMAR DRINKS</h5>
      <p style={{ textAlign: "center" }}>
        Alpukat kocok, Durian kocok, and Dimsum
      </p>
      <p style={{ textAlign: "center" }}>
        Jl. Sawo Manila, Jati Padang, Jakarta Selatan
      </p>
      <hr />

      <p>Customer: {order.customerName}</p>
      <p>Tanggal: {new Date().toLocaleString()}</p>
      <hr />

      {order.items.map((item, i) => (
        <div
          key={i}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            {item.qty} x {item.name}
          </span>
          <span>Rp {item.qty * item.price}</span>
        </div>
      ))}

      <hr />
      <strong style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total</span>
        <span>Rp {order.totalPrice}</span>
      </strong>

      <hr />
      <p style={{ textAlign: "center" }}>Terima kasih 🙏</p>
    </div>
  );
});

export default Receipt;
