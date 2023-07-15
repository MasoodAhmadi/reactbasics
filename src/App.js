import Homepage from './homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ScoreBoard from './homepage/scoreboard.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/scores' component={ScoreBoard} />
      </Switch>
    </div>
  );
}

export default App;
