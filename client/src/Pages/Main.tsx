import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Workouts from "../Components/Workouts";
import AddWorkout from "../Components/AddWorkout";

const Main: React.FC<{}> = () => {
  const [refresh, setRefresh] = useState(false);
  const [workouts, setWorkouts] = useState("Loading...");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/workout");
        if (!res.ok) {
          console.log("Response not OK, status:", res.status);
          setWorkouts("Error!");
          return;
        }
        const data = await res.json();
        setWorkouts(data["message"]);
      } catch (error) {
        console.error("Fetch error:", error);
        setWorkouts("Error!");
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <div className="bg-white px-40 sticky top-0 z-50">
        <Navbar title="Workout Buddy" />
      </div>
      <div className="px-40 flex py-5 space-x-5 flex-wrap-reverse">
        <div className="w-3/4">
          <Workouts workouts={workouts} refresh setRefresh={setRefresh} />
        </div>
        <div className="relative grow ">
          <div className="sticky top-20\">
            <AddWorkout setRefresh={setRefresh} refresh={refresh} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
