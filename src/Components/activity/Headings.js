import React from "react";

const Headings = (props) => {
  return (
    <div className="mb-3">
      <h3 className="font-bold text-xl">{props.head}</h3>
      <p className="ml-3 text-base">{props.body}</p>
    </div>
  );
};

export default Headings;
