import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Pages/Main";

function App() {
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
  }, []);

  return (
    <>
      <Main workouts={workouts} />
    </>
  );
}

export default App;
