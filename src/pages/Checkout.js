import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Checkout.css";

function CheckoutPage({ cart }) {
  const navigate = useNavigate();

  const USD_TO_LBP = 89000;

  const totalUSD = cart.reduce(
    (sum, item) => sum + item.qty * parseFloat(item.price),
    0
  );

  const totalLBP = totalUSD * USD_TO_LBP;

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    address: "",
    deliveryMethod: "pickup",
    branch: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.mobile || !form.payment) {
      alert("Please fill all required fields.");
      return;
    }

    navigate("/success");
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Mobile Number
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
          />
        </label>

        <label>
          Delivery Method
          <select
            name="deliveryMethod"
            value={form.deliveryMethod}
            onChange={handleChange}
          >
            <option value="pickup">Pickup from branch</option>
            <option value="delivery">Home delivery</option>
          </select>
        </label>

        {form.deliveryMethod === "pickup" && (
          <label>
            Pickup Branch
            <input
              type="text"
              name="branch"
              value={form.branch}
              onChange={handleChange}
            />
          </label>
        )}

        {form.deliveryMethod === "delivery" && (
          <label>
            Delivery Address
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </label>
        )}

        <label>
          Payment Method
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
          >
            <option value="">Select payment...</option>
            <option value="usd">USD</option>
            <option value="lbp">LBP</option>
          </select>
        </label>

        {/* ⭐ TOTAL BOX */}
        <div className="total-box">
          {form.payment === "lbp"
            ? `${totalLBP.toLocaleString()} LBP`
            : `$${totalUSD.toFixed(2)}`}
        </div>

        <button type="submit" className="confirm-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
