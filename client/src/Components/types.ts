export interface INavbar {
  title?: string;
}
export interface IReload{
  setRefresh?:any;
  refresh?:boolean
}
export interface IWorkout extends IReload {
  title?: string;
  load?: number;
  reps?: number;
  time?: any;
  _id?:any;
}
export interface IWorkouts extends IReload{
  workouts:IWorkout[]|string,
  // reload?:IReload
}