//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  var [homeValue, setHomeValue] = useState(0);
  var [awayValue, setAwayValue] = useState(0);

  return (
    <div className="container">
      <ScoreBoard homeValue={homeValue} awayValue={awayValue}/>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeValue(homeValue += 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeValue(homeValue += 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayValue(awayValue += 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayValue(awayValue += 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
