import React from "react";
import bK from "../images/blackKing.png";
import mobile from "./Mobile";

const BlackKingPiece = (props) => {
    function move(event) {
        let x1;
        let y1;
        if(mobile){
            let evt = (typeof event.originalEvent === 'undefined') ? event : event.originalEvent;
            let touch = evt.touches[0] || evt.changedTouches[0];
            x1 = touch.pageX.toFixed(0);
            y1 = touch.pageY.toFixed(0);
        }
        else{
            y1 = event.clientY;
            x1 = event.clientX;
        }
        let bk = document.getElementById("bk");
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(bk.offsetTop / 75);
        let offLeft = Math.floor(bk.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((offLeft === x - 1 && offTop === y - 1) || (offLeft === x - 1 && offTop === y) ||
                (offLeft === x - 1 && offTop === y + 1) || (offLeft === x && offTop === y - 1) ||
                (offLeft === x && offTop === y + 1) || (offLeft === x + 1 && offTop === y - 1) ||
                (offLeft === x + 1 && offTop === y) || (offLeft === x + 1 && offTop === y + 1)) {
                if (props.figures[y][x] === "free") {
                    bk.style.left = `${x * 75}px`;
                    bk.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bk";
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "white"})
                }
                else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none";
                        bk.style.left = `${x * 75}px`;
                        bk.style.top = `${y * 75}px`;

                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black bk";
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "white"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
      bk.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let bk = document.getElementById("bk")
            bk.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile ?
        <img id="bk" className="Figure bK" src={bK} alt="bK" onTouchStartCapture={choosePiece}/>:
    <img id="bk" className="Figure bK" src={bK} alt="bK" onMouseDownCapture={choosePiece}/>
    )
};
export default BlackKingPiece;