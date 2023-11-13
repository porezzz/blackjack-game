import React, { useEffect, useState } from "react";
import drawCards from "../functions/drawCards";
import Card from "./Card";
import counter from "../functions/counter";
const Game = () => {
  const [playerHand, setPlayerHand] = useState([drawCards()]);
  const [dealerHand, setDealerHand] = useState([drawCards()]);

  useEffect(() => {
    console.log("----------started----------");
    setPlayerHand((old) => [...old, drawCards()]);
  }, []);

  const addCardPlayer = () => {
    setPlayerHand((old) => [...old, drawCards()]);
    if(playerHand.includes()){
      console.log("ace")
    }
  };
  
  


  return (
    <div className="bg-black w-screen h-screen text-white flex items-center justify-center">
      {/* player hand */}
      <div className="border w-[100%] h-[30%] absolute bottom-10 text-white flex items-center justify-evenly overflow-x-auto overflow-y-hidden">
        {playerHand.map((x) => (
          <div key={Math.random()}>{Card(x.name)}</div>
        ))}
      </div>
      {/* dealer hand */}
      <div className="border w-[100%] h-[30%] absolute top-10 flex items-center justify-evenly overflow-x-auto overflow-y-hidden text-[80px]">
        {dealerHand.map((x) => (
          <div key={Math.random()}>{Card(x.name)}</div>
        ))}
      </div>

      {/* menu */}
      <div className="border w-[40%] h-[20%] flex items-center justify-around">
        <button
          className="border rounded-full w-[100px] h-[100px] flex items-center justify-center"
        >
          <p>Pass</p>
        </button>
        <div className="flex flex-col m-5 h-[100%] justify-around">
          <div className="text-[30px]">
            Dealer: {counter(dealerHand)} points
          </div>
          <div className="text-[30px]">
            Player: {counter(playerHand)} points
          </div>
        </div>
        <button
          onClick={addCardPlayer}
          className="border rounded-full w-[100px] h-[100px] flex items-center justify-center"
        >
          <p>Hit</p>
        </button>
      </div>
    </div>
  );
};

export default Game;
