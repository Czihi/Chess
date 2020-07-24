import React from "react";
import wK from "../images/whiteKing.png";
import mobile from "./Mobile";

const WhiteKingPiece = (props) => {

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
        let wk = document.getElementById("wk");
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
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
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        wk.style.backgroundColor="transparent";
    }


    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let wk = document.getElementById("wk")
            wk.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile? <img id="wk" className="Figure wK" src={wK} alt="wK" onTouchStartCapture={choosePiece}/>:
        <img id="wk" className="Figure wK" src={wK} alt="wK" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteKingPiece;