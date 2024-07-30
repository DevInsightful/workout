import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Workouts from "../Components/Workouts";
import { IWorkouts } from "../Components/types";
import AddWorkout from "../Components/AddWorkout";

const Main: React.FC<IWorkouts> = ({ workouts }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="bg-white px-40 sticky top-0 z-50">
        <Navbar title="Workout Buddy" />
      </div>
      <div className="px-40 flex py-5 space-x-5">
        <div className="w-3/4">
          {workouts && <Workouts workouts={workouts} />}
        </div>
        <div className="relative grow ">
          <div className="sticky top-20\">
            <AddWorkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
