import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Chessboard from "./components/Chessboard";
import Gamedata from "./components/Gamedata";
import mobile from "./components/Mobile";


class App extends Component {
    changeSize= () => {
        let pieces;
        if (mobile) {
            pieces = document.getElementsByClassName('MiniFigure');
            for (let i = 0; i < pieces.length; i++) {
                pieces[i].style.maxWidth = "20px";
            }
        }
    };
    state = {
        figures: [["black br0", "black bn0", "black bb0", "black bq", "black bk", "black bb1", "black bn1", "black br1"],
            ["black bp0", "black bp1", "black bp2", "black bp3", "black bp4", "black bp5", "black bp6", "black bp7"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free", "free"],
            ["white wp0", "white wp1", "white wp2", "white wp3", "white wp4", "white wp5", "white wp6", "white wp7"],
            ["white wr0", "white wn0", "white wb0", "white wq", "white wk", "white wb1", "white wn1", "white wr1"]],
        turn: "white",
        piecesTaken: []
    };


    render() {
        const fav=document.getElementById("fav");
        this.changeSize();
        return (
            <Router>
                <Route path="/Chess" exact render={
                    () => {
                        document.title=`Chess - ${this.state.turn} turn`;
                            fav.href=`${this.state.turn}King.png`;
                        return (
                            <div className="App" draggable="false">
                                <Chessboard
                                    setState={(s,c)=>this.setState(s, c)}
                                    figures={this.state.figures}
                                    turn={this.state.turn}
                                    piecesTaken={this.state.piecesTaken}
                                />
                                <Gamedata
                                turn={this.state.turn}
                                piecesTaken={this.state.piecesTaken}
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
