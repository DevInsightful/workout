import React from "react";
import Workout from "./Workout";
import { IWorkouts } from "./types";
const Workouts: React.FC<IWorkouts> = ({ workouts, refresh, setRefresh }) => {
  const condition = typeof workouts === "object";
  const display = condition
    ? workouts.map((workouts, index) => {
        return (
          <Workout
            key={index}
            {...workouts}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        );
      })
    : workouts;
  return <div className="flex flex-col gap-8">{display}</div>;
};

export default Workouts;
