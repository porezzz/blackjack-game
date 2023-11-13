import React, { useEffect, useState } from "react";
import drawCards from "../functions/drawCards";
import Card from "./Card";
import counter from "../functions/counter";
const Game = () => {
  const [playerHand, setPlayerHand] = useState([drawCards()]);
  const [dealerHand, setDealerHand] = useState('dealers hand');

  useEffect(() => {
    console.log("---------------started------------------------");

    setPlayerHand((old) => [...old, drawCards()]);
  }, []);

  // test
  console.log(playerHand);
  console.log(counter(playerHand))

  // optimize for dealer hand aswell
  const addCardPlayer = () => {
    setPlayerHand((old) => [...old, drawCards()]);
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
        {dealerHand}
      </div>

      {/* menu */}
      <div className="border w-[30%] h-[20%] flex items-center justify-around">
        <button className="border rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <p>Pass</p>
        </button>
        <div className="text-[40px]">Points: {counter(playerHand)}</div>
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
