import React, { useState } from "react";
import "./snacks.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Snacks = () => {
  const [counter, setCounter] = useState(1)
  const [price, setPrice] = useState(600)

  // let price = 600
  // let counter = 1

// const handleCounter=()=>{
//   setCounter(counter + 1)
// }

// const handleMinusCounter=()=>{
//   setCounter(props=> props <= 2 ? 2 : props - 1)
// }

const handleCounter=(type)=>{
  type == "minus" ? setCounter(prevState => prevState <= 2 ? 2 : prevState - 1) : setCounter(counter + 1)
}

  return (
    <div className="background">
      <div className="header-content">
        <h1 className="text-white	">Everyday is a good</h1>
        <h1 className="text-white	"> day for small chops</h1>
        <p className="text-yellow-400 text-2l">
          Order the everyday pack and get <br /> s moving. Better yet, make it
          two.
        </p>
      </div>
      <div className="place-order">
        <div className="naira">
          <h2> <span>&#8358;</span><span>{price * counter}</span></h2>
        </div>

        <div className="numbers">
          <div className="minus" onClick={()=>handleCounter("minus")} >
            <h2><a href="#">-</a></h2>
          </div>
          <div className="num">
            <h2>{counter}</h2>
          </div>
          <div className="addition" onClick={()=>handleCounter("add")} >
            <h2><a href="#">+</a></h2>
            
          </div>
          <div className="arrow bg-purple-500">
          <h2><a href="#"><ArrowForwardIcon /></a></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snacks;
