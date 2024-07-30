import React from "react";
import Navbar from "../Components/Navbar";
import Workouts from "../Components/Workouts";
import { IWorkouts } from "../Components/types";
import AddWorkout from "../Components/AddWorkout";

const Main: React.FC<IWorkouts> = ({ workouts }) => {
  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="bg-white px-40">
        <Navbar title="Workout Buddy" />
      </div>
      <div className="px-40 flex py-5 space-x-5">
        <div className="w-3/4">
          <Workouts workouts={workouts} />
        </div>
        <div className="relative grow ">
          <div className="">
            <AddWorkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
