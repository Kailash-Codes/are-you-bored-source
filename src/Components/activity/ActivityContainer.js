import React from "react";
import Button from "../home/Button";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ActivityCard from "./ActivityCard";
const ActivityContainer = () => {

  const headings = ["Activity", "Participants", "Price", "Accessibility"];
  const [activity, setActivity] = useState({});
  useEffect(() => {
    axios.get("https://www.boredapi.com/api/activity").then((data) => {
      setActivity(data.data);
    });
  }, []);
  function handleClick(){
   window.location.reload();
  }
  return (
    <>
    <div className="border hover:border-red min-w-[100%] lg:min-w-[40%]  p-5 mt-5 bg-[#EAFFE4] rounded-xl">
     <ActivityCard
        activityHead={headings[0]}
        activityBody={activity.activity}
        participantsHead={headings[1]}
        participantsBody={activity.participants}
        priceHead={headings[2]}
        priceBody={activity.price}
        accessibilityHead={headings[3]}
        accessibilityBody={activity.accessibility}
      />
      <Button text="Next" onclick={handleClick} />
    </div>
      </>
  );
};

export default ActivityContainer;
