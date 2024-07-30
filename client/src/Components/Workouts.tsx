import React from "react";
import Workout from "./Workout";
import { IWorkouts } from "./types";
const Workouts: React.FC<IWorkouts> = ({ workouts }) => {
  const display = workouts.map((workouts, index) => {
    return <Workout key={index} {...workouts} />;
  });
  return <div className="flex flex-col gap-8 py-5">{display}</div>;
};

export default Workouts;
