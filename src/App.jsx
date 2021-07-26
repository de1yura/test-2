import Weather from './components/Weather'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; //npm install --save react-router-dom
import OneQuestion from './components/OneQuestion'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>

     <Navbar />

      <Switch>

        <Route exact path ="/weather">
          <Weather />
        </Route>

        <Route exact path ="/question">
          <OneQuestion />
        </Route>


      </Switch>


    </Router>
    
    
    </>
  );
}

export default App;
