import React from "react";
import Table from "react-bootstrap/Table"
import wk from "../images/whiteKing.png";
import wq from "../images/whiteQueen.png";
import wr from  "../images/whiteRook.png";
import wn from  "../images/whiteKnight.png";
import wb from "../images/whiteBishop.png";
import wp from "../images/whitePawn.png";
import bk from "../images/blackKing.png";
import bq from "../images/blackQueen.png";
import br from  "../images/blackRook.png";
import bn from  "../images/blackKnight.png";
import bb from "../images/blackBishop.png";
import bp from "../images/blackPawn.png";
const Gamedata = (props)=>{
    let whitePiecesTaken=[];
    let blackPiecesTaken=[];
    let index=0;
    for (let piece in props.piecesTaken){
        const pieceName=props.piecesTaken[piece].split(" ");
        let pieceCod=pieceName[1];
        if(pieceName[1].length===3) {
            pieceCod = pieceName[1].slice(0, -1);
        }
        const sources={"wp": wp, "wk": wk, "wq": wq, "wb": wb, "wr": wr, "wn" : wn,
            "bp": bp, "bk": bk, "bq": bq, "bb": bb, "br": br, "bn" : bn
        }
        if(pieceName[0]==="white") {
            whitePiecesTaken.push(<img key={index} className="Figure MiniFigure" src={sources[pieceCod]} alt={pieceCod}/>)
        }else{
            blackPiecesTaken.push(<img key={index} className="Figure MiniFigure" src={sources[pieceCod]} alt={pieceCod}/>)
        }
        index++;
    }
    return(<div>
        <Table className="gameTable" striped bordered hover size="sm" variant="dark">
            <tbody>
            <tr>
                <td>{whitePiecesTaken}</td>
            </tr>
            <tr>
                <td className="turn">
                    {props.turn[0].toUpperCase()+props.turn.slice(1)} turn
                </td>
            </tr>
            <tr>
                <td>{blackPiecesTaken}</td>
            </tr>
            </tbody>
        </Table>
    </div>)
}
export default Gamedata