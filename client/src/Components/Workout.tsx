import React from "react";
import { IWorkout } from "./types";

const Workout: React.FC<IWorkout> = ({ title, load, reps, time }) => {
  return (
    <div className="bg-white p-5 flex justify-between">
      <div>
        <h5 className="text-[#36a28b] text-lg font-bold">{title}</h5>
        <p>
          <span className="subText">Load (kg):</span>
          <span className="valueText">{load}</span>
        </p>
        <p>
          <span className="subText">Reps:</span>
          <span className="valueText">{reps}</span>
        </p>
        <p className="valueText">{time}</p>
      </div>
      <div>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Workout;
