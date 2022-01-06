import React from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
// we don't have to specify the file here because it'll just automatically use the correct index file from the folder when it runs
import { Route, Router, Switch } from "./Router/index";


export const Routes = () => {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WorkoutHistory}></Route>
          <Route exact path="/current-workout" component={CurrentWorkout}></Route>
          <Route exact 
          path="/workout/:year/:month/:day" 
          component={CurrentWorkout}></Route>
        </Switch>
      </Router>
    ); 
};