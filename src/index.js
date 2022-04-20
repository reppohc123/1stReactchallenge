import React from "react";
import ReactDom from "react-dom";
var max = 9;
var number = Math.floor(Math.random() * max);
ReactDom.render(
  <div>
    {" "}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Why Luffy is Joyboy?
    </h1>{" "}
    <div>
      <img
        src={
          "https://www.opfanpage.com/wp-content/uploads/2022/01/maxresdefault-9-1024x576.jpg"
        }
        alt="Gomu Gomu no Mi"
      />
      <img
        src="https://static2.srcdn.com/wordpress/wp-content/uploads/2022/03/one-piece-1044-4.jpg?q=50&fit=crop&w=963&h=705&dpr=1.5"
        alt="Chapter 1044"
      />
      <img
        src="https://static3.srcdn.com/wordpress/wp-content/uploads/2022/03/one-piece-1044-131.jpg?q=50&fit=crop&w=740&h=534&dpr=1.5"
        alt="Zoan Fruit"
      />
    </div>
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
