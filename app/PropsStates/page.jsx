"use client";

import { useState } from "react";


const Counter = () => {
     const [number, setNumber] = useState(0);
     return (
          <div style={{
               textAlign: "center"
          }}>
               <h1>Counter</h1>
               <button onClick={() => setNumber(prev => prev+1)}>Incrementar</button>
               <h2>{number}</h2>
               <button onClick={() => setNumber(prev => prev-1)}>Decrementar</button>
          </div>
     )
}

export default Counter;