import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import RandomQuote from "./RandomQuote";

export default function App() {
  return (
    <div className="App">
      <RandomQuote />
      <h4 id="footer">©Joe Sharick</h4>
    </div>
  );
}
