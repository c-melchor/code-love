import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
