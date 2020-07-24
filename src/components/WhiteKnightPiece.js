import React from "react";
import wN from "../images/whiteKnight.png";
import mobile from "./Mobile";

const WhiteKnightPiece = (props) => {
    const id=props.knightID;
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
        let wn = document.getElementById("wn"+id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(wn.offsetTop / 75);
        let offLeft = Math.floor(wn.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((offTop+2===y && offLeft +1===x) || (offTop+2===y && offLeft-1===x)
            || (offTop+1===y && offLeft +2===x) || (offTop+1===y && offLeft-2===x)
            || (offTop-1===y && offLeft +2===x) || (offTop-1===y && offLeft-2===x)
            || (offTop-2===y && offLeft +1===x) || (offTop-2===y && offLeft-1===x)) {
                if (props.figures[y][x] === "free") {
                    wn.style.left = `${x * 75}px`;
                    wn.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wn"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "black"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "black"){
                        document.getElementById(fig[1]).style.display="none";
                        wn.style.left = `${x * 75}px`;
                        wn.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wn"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        wn.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let wn = document.getElementById("wn"+id);
            wn.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile? <img id={"wn"+id} className={"Figure wN"+id} src={wN} alt="wN" onTouchStartCapture={choosePiece}/>:
        <img id={"wn"+id} className={"Figure wN"+id} src={wN} alt="wN" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteKnightPiece;