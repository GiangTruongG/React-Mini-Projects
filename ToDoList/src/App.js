import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTask from "./AddTask";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />  
        </Route>
        <Route path='/addtask'>
          <AddTask />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
