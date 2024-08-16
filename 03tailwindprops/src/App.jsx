import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoeCard from "../components/ShoeCard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-white text-black">
        Tailwind Test
      </h1>
      <ShoeCard shoename="Nike Air Max 21A" shoeprice="45,677" imgLink="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"></ShoeCard>
      <ShoeCard shoename="Puma Series 1" shoeprice="32,456" imgLink="https://images.unsplash.com/photo-1715692965423-28e7b823a60d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></ShoeCard>
    </>
  );
}

export default App;
