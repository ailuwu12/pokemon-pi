import './App.css';
import { Home, Landing, Form, Detail, NotFound } from './views';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"><Landing/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/create"><Form/></Route>
      <Route exact path="/pokemons/:id"><Detail/></Route>
      <Route path="*"><NotFound/></Route>
      </Switch>
    </div>
  );
}

export default App;
