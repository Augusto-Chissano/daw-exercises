'use client'

import { useState } from "react";

const Page = () => {
     return (
          <main className="h-screen flex">
               <div className="hero">
                    <div className="hero-content text-center">
                         <div className="max-w-md">
                              <h1 className="text-5xl font-bold">{true ? 'User is logged in' : 'User is not logged in'}</h1>
                         </div>
                    </div>
               </div>
          </main>
     )
}

export default Page;