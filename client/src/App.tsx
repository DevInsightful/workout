import { useEffect, useState } from "react";
import "./App.css";
// import { workoutData } from "./assets/dummy";
import Main from "./Pages/Main";

function App() {
  const [workouts, setWorkouts] = useState();
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/workout");
      if (res.ok) {
        console.log("good");
      } else {
        console.log("object");
      }
      const data = await res.json();
      //  setMessage("");
      setWorkouts(data["message"]);
      console.log(workouts);
    };
    fetchData();
  }, []);
  return (
    <>
      <Main workouts={workouts} message={message} />
    </>
  );
}

export default App;
