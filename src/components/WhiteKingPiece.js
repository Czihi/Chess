import React from "react";
import wK from "../images/whiteKing.png";

const WhiteKingPiece = (props) => {

    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let wk = document.getElementById("wk");
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(wk.offsetTop / 75);
        let offLeft = Math.floor(wk.offsetLeft / 75);
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((offLeft === x - 1 && offTop === y - 1) || (offLeft === x - 1 && offTop === y) ||
                (offLeft === x - 1 && offTop === y + 1) || (offLeft === x && offTop === y - 1) ||
                (offLeft === x && offTop === y + 1) || (offLeft === x + 1 && offTop === y - 1) ||
                (offLeft === x + 1 && offTop === y) || (offLeft === x + 1 && offTop === y + 1)) {
                if (props.figures[y][x] === "free") {
                    wk.style.left = `${x * 75}px`;
                    wk.style.top = `${y * 75}px`;
                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wk";
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "black"})
                }
                else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "black"){
                        document.getElementById(fig[1]).style.display="none";
                        wk.style.left = `${x * 75}px`;
                        wk.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wk";
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('click', move)
        wk.style.backgroundColor="transparent";
    }


    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('click', move);
            let wk = document.getElementById("wk")
            wk.style.backgroundColor = "#aaaaaa";
        }
    }

    return (
        <img id="wk" className="Figure wK" src={wK} alt="wK" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteKingPiece;