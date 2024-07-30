import { useEffect, useState } from "react";
import "./App.css";
// import { workoutData } from "./assets/dummy";
import Main from "./Pages/Main";

function App() {
  const [workouts, setWorkouts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/workout");
      const data = await res.json();
      setWorkouts(data["message"]);
      console.log(workouts);
    };
    fetchData();
  }, []);
  return (
    <>
      <Main workouts={workouts} />
    </>
  );
}

export default App;
