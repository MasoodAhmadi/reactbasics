import Homepage from './homepage/home.page';
import { Switch, Route } from 'react-router-dom';
import ScoreBoard from './homepage/scoreboard.page';
import Header from './homepage/header.page';
import Footer from './homepage/footer.page';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/scores' component={ScoreBoard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
