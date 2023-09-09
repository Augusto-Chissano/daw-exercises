"use client";

import { useState, useEffect } from "react";


const LifeCycle = () => {
     const [number, setNumber] = useState(0);

     //Ciclo de vida e um componente
     useEffect(() => {
          console.log("Montado ou actualizado");

          return () => {
               console.log("Desmontado")
          }
     })
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

export default LifeCycle;