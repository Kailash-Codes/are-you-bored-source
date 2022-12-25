import React from "react";

const Button = (props) => {
  return (
    <div className="flex justify-center mt-4">
      <button onClick={props.onclick} className="font-semibold text-white bg-sky-500 border-2 p-2 rounded-xl trasition ease-in-out hover:bg-sky-800 duration-500">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
