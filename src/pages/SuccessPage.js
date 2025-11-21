import React from "react";
import "../Styles/SuccessPage.css";

function SuccessPage(){
  const estimatedTime = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

  return (
    <div className="success-container">
      <h1>
        Thank you for shopping from{" "}
        <span className="brand">Mohamad Market</span>! 🛒
      </h1>

      <p>Your order has been submitted successfully.</p>

      <p>The delivery team will contact you when your order is ready.</p>

      <h2>
        Estimated Delivery Time:{" "}
        <span className="time">{estimatedTime} minutes</span>
      </h2>

      <p className="thanks">We appreciate your trust!</p>
    </div>
  );
}

export default SuccessPage;
