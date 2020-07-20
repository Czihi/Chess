import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Chessboard from "./components/Chessboard";

class App extends Component{
render (){
  return(
      <Router>
        <Route path="/Chess" exact render={
          () => {
            return(
            <div className="App">
              <Chessboard/>
            </div>
            )
          }
        }/>
      </Router>
  )
}
}

export default App;
