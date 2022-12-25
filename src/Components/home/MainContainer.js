import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
const MainContainer = () => {
  return (
    <div className="border hover:border-red min-w-0 p-5 mt-5 bg-[#EAFFE4] rounded-xl">
      <Heading />
      <Image />
      <Button text="See what you can do"/>
    </div>
  );
};

export default MainContainer;
