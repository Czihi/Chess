import React from "react";
import board from "../images/chessboard.png"
import BlackKingPiece from "./BlackKingPiece";
import BlackPawnPiece from "./BlackPawnPiece";
import BlackQueenPiece from "./BlackQueenPiece";
import WhitePawnPiece from "./WhitePawnPiece"
const Chessboard = (props) => {
    return(
        <div id="container">
            <img className="Board" src={board} id="board" alt="board"/>
            <BlackKingPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
            />
            <BlackQueenPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={0}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={1}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={2}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={3}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={4}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={5}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={6}
                turn={props.turn}
            />
            <BlackPawnPiece
                figures={props.figures}
                setState={props.setState}
                pawnID={7}
                turn={props.turn}
            />

                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={0}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={1}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={2}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={3}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={4}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={5}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={6}
                    turn={props.turn}
                />
                <WhitePawnPiece
                    figures={props.figures}
                    setState={props.setState}
                    pawnID={7}
                    turn={props.turn}
                />



        </div>
    )
};
export default Chessboard;