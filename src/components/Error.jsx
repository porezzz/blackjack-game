import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-black w-screen h-screen text-white text-[100px] flex items-center justify-center text-center flex-col select-none">
      <div className="w-[50%] h-[50%]">
        <p>Error</p>
        <p>Page not Found!</p>
      </div>
      <Link to="/">
        <p className=" text-red-500 border border-red-500 rounded-xl">Return</p>
      </Link>
    </div>
  );
};

export default Error;
