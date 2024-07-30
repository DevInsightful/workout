import React from "react";
import { IWorkout } from "./types";

const Workout: React.FC<IWorkout> = ({ title, load, reps, time }) => {
  return (
    <div className="bg-white p-5">
      <div>
        <h5>{title}</h5>
        <p>{load}</p>
        <p>{reps}</p>
        <p>{time}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Workout;
