import { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0);
  return (
    <div>
        <p>el contador es: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  )

}

export default Counter;
