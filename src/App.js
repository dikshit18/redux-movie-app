import React from "react";
import Movies from "./containers/Movies";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="movies" />
        </Route>
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" exact component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
