import "../styles/calculator.css";
import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");

  function valClicked(e) {
    if (e != "is-clear" && e != "=") {
      setDisplay(display + e);
    }
    if (e == "is-clear") {
      setDisplay("");
    }

    if (e == "=") {
      try {
        setDisplay(
          String(eval(display)).length > 3 &&
          String(eval(display)).includes(".")
            ? String(eval(display).toFixed(4))
            : String(eval(display))
        );
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="Calculator">
      <input name="num" value={display} style={{ color: "white" }} />
      <div className="Calculator-Buttons">
        <button
          className="is-clear"
          onClick={() => {
            valClicked("is-clear");
          }}
        >
          C
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked("/");
          }}
        >
          /
        </button>

        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(7);
          }}
        >
          7
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(8);
          }}
        >
          8
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(9);
          }}
        >
          9
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked("*");
          }}
        >
          *
        </button>

        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(4);
          }}
        >
          4
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(5);
          }}
        >
          5
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(6);
          }}
        >
          6
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked("-");
          }}
        >
          -
        </button>

        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(1);
          }}
        >
          1
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(2);
          }}
        >
          2
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked(3);
          }}
        >
          3
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked("+");
          }}
        >
          +
        </button>

        <button
          className="is-zero"
          onClick={() => {
            valClicked(0);
          }}
        >
          0
        </button>
        <button
          className="Calc-btn"
          onClick={() => {
            valClicked("=");
          }}
          style={{ background: "#28D060" }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
