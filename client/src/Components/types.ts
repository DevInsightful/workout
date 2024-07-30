export interface INavbar {
  title?: string;
}
export interface IWorkout {
  title?: string;
  load?: number;
  reps?: number;
  time?: any;
}
export interface IWorkouts{
    workouts:IWorkout[]
}