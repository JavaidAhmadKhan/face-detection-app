import React from "react";

import { Tilt } from "react-tilt";
import Brain from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex p-3">
        <Tilt className="w-[100px] shadow-xl">
          <div className="shadow-md rounded-lg bg-slate-100  p-3">
            <img src={Brain} alt="brain" />
          </div>
        </Tilt>
        <Link to="/" className="ml-auto">
          <p className=" text-white text-lg font-medium pointer ">Sign out</p>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
