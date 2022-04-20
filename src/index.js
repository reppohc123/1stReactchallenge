import React from "react";
import ReactDom from "react-dom";
var max = 9;
var number = Math.floor(Math.random() * max);
ReactDom.render(
  <div>
    {" "}
    <h1 className="heading">Why Luffy is Joyboy?</h1>{" "}
    <ul>
      {" "}
      <li>Gomu Gomu no Fruit is a Zoan Fruit</li>{" "}
      <li>Awakining looks like NIKA</li> <li>Chapter 1009</li>{" "}
    </ul>{" "}
    <p>Waht is your devil fruit?</p>{" "}
    <ul>
      {" "}
      <li>1 Doku Doku no Mi</li> <li>2 Hie Hie no Mi</li>{" "}
      <li>3 Soru Soru no Mi</li> <li>4 Gura Gura no Mi</li>{" "}
      <li>5 Ope Ope no Mi</li> <li>6 Goro Goro no Mi</li>{" "}
      <li>7 Sara Sara no Mi</li> <li>8 Yami Yami no Mi</li>{" "}
      <li>9 Gomu Gomu no Mi</li>{" "}
    </ul>{" "}
    <p>Your number is {number}!</p>{" "}
  </div>,
  document.getElementById("root")
);
