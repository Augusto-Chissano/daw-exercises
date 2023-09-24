"use client";

import { useState, useEffect } from "react";

const  Counter = () => {
     const [number, setNumber] = useState(0);

     const increment= () => {
          setNumber(prevState => number + 1);
     }     
     const decrement = () => {
          setNumber(prevState => number - 1);
     }

     useEffect(() => {
          console.log("COMPONENT MOUNTED");

          return () => {
               console.log("COMPONENT UNMOUNTED")
          }
     })

     return (
          <>
           <div className="flex flex-col sm:flex-row m-4 p-4 gap-20 justify-center text-5xl">
             <button className="btn btn-outline btn-info px-7 text-3xl" onClick={increment}>+</button>
             <p>{number}</p>
             <button className="btn btn-outline btn-info px-7 text-3xl" onClick={decrement}>-</button>
           </div>
          </>
     )
}

export default Counter;