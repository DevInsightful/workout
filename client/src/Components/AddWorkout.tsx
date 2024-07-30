import React, { useState } from "react";

const AddWorkout = () => {
  const [title, setTitle] = useState<string>("");
  const [load, setLoad] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(title, load, reps);
    setLoad("");
    setReps("");
    setTitle("");
  };
  return (
    <>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
        <legend className="text-[#303538] text-lg font-bold">
          Add a New Workout
        </legend>
        <div className="flex flex-col">
          <label className="subText mb-3" htmlFor="title">
            Excersize Title:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="subText mb-3" htmlFor="load">
            Load (in kg):
          </label>
          <input
            onChange={(e) => setLoad(e.target.value)}
            id="load"
            value={load}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label className="subText mb-3" htmlFor="reps">
            Reps:
          </label>
          <input
            onChange={(e) => setReps(e.target.value)}
            id="reps"
            value={reps}
            type="number"
          />
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </>
  );
};

export default AddWorkout;
