import React from "react";
import board from "../images/chessboard.png"
import BlackKingPiece from "./BlackKingPiece";
import BlackPawnPiece from "./BlackPawnPiece";
import BlackQueenPiece from "./BlackQueenPiece";
const Chessboard = () => {
    return(
        <div id="container">
            <img className="Board" src={board} id="board" alt="board"/>
            <BlackKingPiece
            />
            <BlackQueenPiece
            />
            <BlackPawnPiece
            />



        </div>
    )
};
export default Chessboard;