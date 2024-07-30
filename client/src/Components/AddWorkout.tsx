import React from "react";

const AddWorkout = () => {
  const handleSubmit = (e: any) => {
    e.preventDefaults();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title">Excersize Title:</label>
          <input id="title" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="load">Load (in kg):</label>
          <input id="load" type="number" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reps">Reps:</label>
          <input id="reps" type="number" />
        </div>
      </form>
    </div>
  );
};

export default AddWorkout;
