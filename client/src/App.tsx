import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Pages/Main";

function App() {
  const [workouts, setWorkouts] = useState("Loading...");
  // const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/workout");
      if (!res.ok) {
        setWorkouts("Error!");
        return;
      }
      const data = await res.json();
      setWorkouts(data["message"]);
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
