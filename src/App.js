import "./App.css";
import Navbar from "./components/navbar/index"
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import { useState } from "react";
import "./index.css";
import Page from "./components/packOfSnacks/snacks"


let word = "Hello World";

const App = () => {
  const [name, setName] = useState("Daniel");

  return (
    <div className="">
      <Navbar />
      {/* <Hero /> */}
      <Page />
      {/* <h1>My name is {name}</h1>
      <button onClick={()=>setName("Racheal")}>Change Name</button>
      <Header />
    */}
    </div>
  ); 
};

export default App;
