import React from "react";
import ActivityContainer from "./Components/activity/ActivityContainer";
import MainContainer from "./Components/home/MainContainer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex justify-center ">
  <MainContainer/>
  <ActivityContainer/>
    </div>
  );
};

export default App;
