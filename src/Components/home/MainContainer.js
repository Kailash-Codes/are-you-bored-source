import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "./Image";
const MainContainer = () => {
  return <div className="border min-w-0 p-5 mt-5 bg-[#EAFFE4] rounded-xl">
    <Heading />
    <Image />
    <Button />
  </div>;
};

export default MainContainer;