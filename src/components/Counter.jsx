import { useState } from "react";

export function Counter() {
  let [x, setX] = useState(0);
  return (
    <>
      <h1>Counter{x}</h1>
      <button onClick={() => (x = x + 1)}>+</button>

      <button onClick={() => setX(x + 1)}>Counter</button>
      <button onClick={() => console.log(x)}>Show</button>
    </>
  );
}
