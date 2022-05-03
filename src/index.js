import React from "react";
import ReactDom from "react-dom";
import Body from "./body.jsx";
import List from "./list.jsx";
var max = 9;
var number = Math.floor(Math.random() * max);
ReactDom.render(
  <div>
    {" "}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Why Luffy is Joyboy?
    </h1>{" "}
    <Body />
    <p>Waht is your devil fruit?</p>
    <List /> <p>Your number is {number}!</p>{" "}
  </div>,
  document.getElementById("root")
);
