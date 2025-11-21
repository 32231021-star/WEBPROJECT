import React, { useState } from "react";
import "../Styles/Fruits_Vegetables.css";
import { FruitsList } from "../Data/FruitsList";

const generatePrices = (count) => {
  return Array.from({ length: count }, () =>
    (Math.random() * (5 - 1) + 1).toFixed(2)
  );
};

const Fruits = ({ addToCart }) => {
  const [prices] = useState(generatePrices(FruitsList.length));
  const [quantities, setQuantities] = useState(
    Array(FruitsList.length).fill(1)
  );

  const increaseQty = (index) => {
    setQuantities(
      quantities.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  const decreaseQty = (index) => {
    setQuantities(
      quantities.map((q, i) =>
        i === index && q > 1 ? q - 1 : q
      )
    );
  };

  const handleAdd = (item, index) => {
    const price = Number(prices[index]);

    const product = {
      name: item.name,
      img: item.image,
      price: price,
    };

    addToCart(product, quantities[index], price);

    alert(`${item.name} added to cart`);
  };

  return (
    <div className="products-container">
      <h1>Fruits & Vegetables</h1>

      <div className="products-grid">
        {FruitsList.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="price">${prices[index]}</p>

            <div className="qty-container">
              <button
                className="qty-btn minus"
                onClick={() => decreaseQty(index)}
              >
                –
              </button>

              <span className="qty-value">{quantities[index]}</span>

              <button
                className="qty-btn plus"
                onClick={() => increaseQty(index)}
              >
                +
              </button>
            </div>

            <button
              className="add-cart-btn"
              onClick={() => handleAdd(item, index)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
