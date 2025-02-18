import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import App from "./App";
// import "./index.css";
function Test() {
  const [rated, setRated] = useState(0);
  return (
    <>
      <StarRating
        color={"cyan"}
        onSetRated={setRated}
        size={30}
        messages={["bad", "not bad", "good", "great", "eccelente"]}
        maxRating={5}
      ></StarRating>
      <p>The movie was rated {rated ? rated : ""}</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      color={"cyan"}
      size={20}
      messages={["bad", "not bad", "good", "great", "eccelente"]}
      onSetRated={null}
      maxRating={5}
    ></StarRating>
    <Test></Test>
    {/* <App /> */}
  </React.StrictMode>
);
