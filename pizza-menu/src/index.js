import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Delivery.co</h1>
    </header>
  );
};
const Menu = () => {
  const pizza = pizzaData;
  const pizzanum = pizza.length;
  return (
    <main className="menu">
      <h2>Our menu </h2>
      {pizzanum > 0 ? (
        <>
          <p>
            These are some of the most excellent Italian Cousine dishes
            available to the whole world!
            <br />
            TWO WORLDS EVEN !!!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <h2>"Unfortunately we are out of Pizzas"</h2>
      )}
    </main>
  );
};
const Pizza = ({ pizzaobj }) => {
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "Sold Out " : pizzaobj.price + "$"}</span>
      </div>
    </li>
  );
};
const Footer = () => {
  const time = new Date().toTimeString().split(":")[0];
  const closeHour = 22;
  const openHour = 12;
  const isOpen = time > openHour && time < closeHour;
  console.log(time);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order cHour={closeHour} />
      ) : (
        <p>"We are closed right now, we open at {openHour}:00."</p>
      )}
    </footer>
  );
};
const Order = ({cHour}) => {
  return (
    <div className="order">
      <p>we're open until {cHour}:00. Come visit or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
