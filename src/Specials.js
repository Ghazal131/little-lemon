import React from "react";

function Specials() {
  return (
    <section className="specials-section">
      <h2>This week's specials!</h2>
      <div className="specials-container">
        <div className="special-card">
          <img src="https://little-lemon-web.netlify.app/static/media/greek%20salad.a98cb807b962ea13b321.jpg" alt="Special Dish 1" />
          <h3>Greek Salad</h3>
          <p>Crispy lettuce, peppers, olives, and feta cheese.</p>
          <button className="order-button">Order Delivery</button>
        </div>
        <div className="special-card">
          <img src="https://little-lemon-django-iota.vercel.app/static/img/bruschetta.webp" alt="Special Dish 2" />
          <h3>Burschetta</h3>
          <p>Grilled bread with garlic, tomatoes, and olive oil.</p>
          <button className="order-button">Order Delivery</button>
        </div>
        <div className="special-card">
          <img src="https://www.onceuponachef.com/images/2019/04/Luscious-Lemon-Bars.jpg" alt="Special Dish 3" />
          <h3>Lemon Dessert</h3>
          <p>Fresh baked lemon bread topped with powdered sugar.</p>
          <button className="order-button">Order Delivery</button>
        </div>
      </div>
    </section>
  );
}
export default Specials;