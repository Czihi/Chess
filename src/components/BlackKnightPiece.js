import React from "react";
import bN from "../images/blackKnight.png";
import mobile from "./Mobile";

const BlackKnightPiece = (props) => {
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
        let bn = document.getElementById("bn"+id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(bn.offsetTop / 75);
        let offLeft = Math.floor(bn.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((offTop+2===y && offLeft +1===x) || (offTop+2===y && offLeft-1===x)
                || (offTop+1===y && offLeft +2===x) || (offTop+1===y && offLeft-2===x)
                || (offTop-1===y && offLeft +2===x) || (offTop-1===y && offLeft-2===x)
                || (offTop-2===y && offLeft +1===x) || (offTop-2===y && offLeft-1===x)) {
                if (props.figures[y][x] === "free") {
                    bn.style.left = `${x * 75}px`;
                    bn.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bn"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "white"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none";
                        bn.style.left = `${x * 75}px`;
                        bn.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black bn"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "white"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        bn.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let bn = document.getElementById("bn"+id);
            bn.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile ?
        <img id={"bn"+id} className={"Figure bN"+id} src={bN} alt="bN" onTouchStartCapture={choosePiece}/>:
            <img id={"bn"+id} className={"Figure bN"+id} src={bN} alt="bN" onMouseDownCapture={choosePiece}/>
    )
};
export default BlackKnightPiece;