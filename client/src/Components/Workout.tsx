import React from "react";
import { IWorkout } from "./types";

const Workout: React.FC<IWorkout> = ({
  title,
  load,
  reps,
  time,
  _id,
  refresh,
  setRefresh,
}) => {
  const handleClick = async (_id: number) => {
    try {
      const res = await fetch(`http://localhost:4000/workout/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setRefresh(!refresh);
      });
    } catch (err) {
      console.log(err);
    }
    // const data = await res.json();
  };
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
        <button
          onClick={() => handleClick(_id)}
          className=" material-icons-outlined"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Workout;
