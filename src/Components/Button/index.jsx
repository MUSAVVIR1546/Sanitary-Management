import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Buttons(props) {
  const buttons = [
    ["Add Products"],
    ["View Product"],
    ["Billing History",'/billing-history'],
    ["Pending Bills",'pending-bills'],
  ];
  return (
    <>
      {buttons.map(([name,path],index) => {
        return (
          <div key={name} className="grid items-center justify-center gap-5">
            <Link to={path}>
              <button key={name+index} className="button bg-gray-500 border border-black rounded-lg px-4 py-3 text-2xl mb-20 font-bold">
                {name}
              </button>
            </Link>
          </div>
        );
      })}
      {/* <div className = 'grid items-center justify-center gap-5'> */}
      {/* <button className='button bg-gray-500 border border-black rounded-lg px-4 py-3 text-2xl mb-20 font-bold'>{props.textContent}</button> */}
      {/* </div> */}
    </>
  );
}

export default Buttons;
