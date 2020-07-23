import React from "react";
import board from "../images/chessboard.png"
import BlackKingPiece from "./BlackKingPiece";
import BlackPawnPiece from "./BlackPawnPiece";
import BlackQueenPiece from "./BlackQueenPiece";
import BlackKnightPiece from "./BlackKnightPiece";
import BlackBishopPiece from "./BlackBishopPiece";
import BlackRookPiece from "./BlackRookPiece";
import WhitePawnPiece from "./WhitePawnPiece";
import WhiteKingPiece from "./WhiteKingPiece";
import WhiteQueenPiece from "./WhiteQueenPiece";
import WhiteBishopPiece from "./WhiteBishopPiece";
import WhiteKnightPiece from "./WhiteKnightPiece";
import WhiteRookPiece from "./WhiteRookPiece";

const Chessboard = (props) => {
    return (
        <div id="container">
            <img className="Board" src={board} id="board" alt="board"/>
            <BlackRookPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                rookID={0}
            />
            <BlackKnightPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                knightID={0}
            />
            <BlackBishopPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                bishopID={0}
            />
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
            <BlackBishopPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                bishopID={1}
            />
            <BlackKnightPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                knightID={1}
            />
            <BlackRookPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                rookID={1}
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
            <WhiteRookPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                rookID={0}
            />
            <WhiteKnightPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                knightID={0}
            />
            <WhiteBishopPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                bishopID={0}
            />
            <WhiteQueenPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
            />
            <WhiteKingPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
            />
            <WhiteBishopPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                bishopID={1}
            />
            <WhiteKnightPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                knightID={1}
            />
            <WhiteRookPiece
                figures={props.figures}
                setState={props.setState}
                turn={props.turn}
                rookID={1}
            />
        </div>
    )
};
export default Chessboard;