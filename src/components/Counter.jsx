import { useState } from "react";

export function Counter() {
  let tt = null;
  let [x, setX] = useState(0);
  function f1() {
    clearInterval(tt);
    document.querySelector("#bttn").disabled = true;
    x = 0;
    tt = setInterval(f, 100);
  }
  function f() {
    setX(x + 1);
    x++;
    if (x >= 30) {
      clearInterval(tt);
      document.querySelector("#bttn").disabled = false;
      x = 0;
    }
  }
  return (
    <div>
      <h1>X={x}</h1>
      <button id="bttn" onClick={f1}>
        Click
      </button>
    </div>
  );
}
