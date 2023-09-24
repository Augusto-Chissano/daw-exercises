"use client"

import Link from "next/link";
import { useAppSelector } from "../redux/store";

export default function Home() {
  const username = useAppSelector(state => state.authReducer.value.username)

  return (
    <main className="h-screen flex w-full">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">What would you like to see? Pick up!</p>
            <div className="btn-group btn-group-vertical w-full">
              <button className="btn btn-active"><Link href='/todo'>Todo App</Link></button>
              <button className="btn"><Link href='/counter'>Counter</Link></button>
              <button className="btn"><Link href='/myname'>My name</Link></button>
              <button className="btn"><Link href='/conditional'>Conditional Rendering</Link></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
