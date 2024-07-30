import React from "react";
import Navbar from "../Components/Navbar";
import Workouts from "../Components/Workouts";
import { workoutData } from "../assets/dummy";

const Main = () => {
  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="bg-white px-40">
        <Navbar title="Workout Buddy" />
      </div>
      <div className="px-40">
        <Workouts workouts={workoutData} />
      </div>
    </div>
  );
};

export default Main;
