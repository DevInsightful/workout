import React from "react";

const AddWorkout = () => {
  const handleSubmit = (e: any) => {
    e.preventDefaults();
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
          <input id="title" type="text" />
        </div>
        <div className="flex flex-col">
          <label className="subText mb-3" htmlFor="load">
            Load (in kg):
          </label>
          <input id="load" type="number" />
        </div>
        <div className="flex flex-col">
          <label className="subText mb-3" htmlFor="reps">
            Reps:
          </label>
          <input id="reps" type="number" />
        </div>
      </form>
    </>
  );
};

export default AddWorkout;
