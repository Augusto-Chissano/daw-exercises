import Hello from "./hello";

const NameAndAge = () => {
     const name = "Augusto Chissano";
     const age = 22

     return (
     <>
          <Hello/>
          <h2>Hi there, my name is {name} and I am {age} years old.</h2>
     </>
     )
}

export default NameAndAge;