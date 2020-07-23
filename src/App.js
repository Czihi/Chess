import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Chessboard from "./components/Chessboard";

class App extends Component {

    state = {
        figures: [["black br0", "black bn0", "black bb0", "black bq", "black bk", "black bb1", "black bn1", "black br1"],
            ["black bp0", "black bp1", "black bp2", "black bp3", "black bp4", "black bp5", "black bp6", "black bp7"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["white wp0", "white wp1", "white wp2", "white wp3", "white wp4", "white wp5", "white wp6", "white wp7"],
            ["white wr0", "white wn0", "white wb0", "white wq", "white wk", "white wb1", "white wn1", "white wr1"]],
        turn: "white"
    };


    render() {
        return (
            <Router>
                <Route path="/Chess" exact render={
                    () => {
                        return (
                            <div className="App">
                                <Chessboard
                                    setState={(s,c)=>this.setState(s, c)}
                                    figures={this.state.figures}
                                    turn={this.state.turn}
                                />
                            </div>
                        )
                    }
                }/>
            </Router>
        )
    }
}

export default App;
