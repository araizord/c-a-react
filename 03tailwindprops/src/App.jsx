import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   name: "Apoorv",
  //   age: 24
  // }

  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username="Apoorv"/>
      <Card/>
    </>
  );
}

export default App;
