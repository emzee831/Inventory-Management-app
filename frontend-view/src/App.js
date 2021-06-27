import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import allitems from './Components/pages/listitems';
import home from './Components/pages/home';
import Nav from './Components/navbar/nav'
import search from './Components/pages/search'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {home}></Route>
          <Route path = "/inventory" component = {allitems}></Route>
          <Route path = "/search" component = {search}></Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
