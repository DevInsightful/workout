import "./App.css";
import { workoutData } from "./assets/dummy";
import Main from "./Pages/Main";

function App() {
  return (
    <>
      <Main workouts={workoutData} />
    </>
  );
}

export default App;
