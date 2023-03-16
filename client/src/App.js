import './App.css';
import { Home, Landing, Form, Detail } from './views';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/"><Landing/></Route>
      <Route path="/home"><Home/></Route>
      <Route path="/create"><Form/></Route>
      <Route exact path="/pokemons/:id"><Detail/></Route>
    </div>
  );
}

export default App;
