import { useState } from "react";
import { useEffect } from "react";
export function EffectDemo() {
  
  let [x, setX] = useState(0);
  useEffect(() => {
  document.title = `Count: ${x}`
}, [x])
  return (
    <>
      <h1>Counter{x}</h1>
      <button onClick={() => (x = x + 1)}>+</button>

      <button onClick={() => setX(x + 1)}>Counter</button>
      <button onClick={() => console.log(x)}>Show</button>
    </>
  );
}
