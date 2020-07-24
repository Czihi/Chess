import React from "react";
import bP from "../images/blackPawn.png"
import mobile from "./Mobile";


const BlackPawnPiece = (props) => {
    const id = props.pawnID;

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
        let bp = document.getElementById("bp" + id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(bp.offsetTop / 75);
        let offLeft = Math.floor(bp.offsetLeft / 75);
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if (offLeft === x &&
                (offTop === y - 1 || (offTop === y - 2 && y - 2 === 1 && props.figures[y-1][x]==="free")) &&
                props.figures[y][x] === "free") {
                bp.style.left = `${x * 75}px`;
                bp.style.top = `${y * 75}px`;

                let newFigures = [...props.figures];
                newFigures[y][x] = "black bp" + id;
                newFigures[offTop][offLeft] = "free";
                props.setState({figures: newFigures});
                props.setState({turn: "white"})
            }else{
                let fig=props.figures[y][x].split(" ");
                if(offTop === y-1 && (offLeft===x+1 || offLeft===x-1) && fig[0]==="white"){
                    document.getElementById(fig[1]).style.display="none";
                    bp.style.left = `${x * 75}px`;
                    bp.style.top = `${y * 75}px`;
                    let newPiecesTaken = [...props.piecesTaken];
                    newPiecesTaken.push(props.figures[y][x]);
                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bp" + id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                    props.setState({turn: "white"});
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        bp.style.backgroundColor = "transparent";
    }

    function choosePiece() {
        if (props.turn === "black") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let bp = document.getElementById("bp" + id)
            bp.style.backgroundColor = "#aaaaaa";
        }
    }


    return (mobile ? <img id={"bp" + id} className={"Figure bP"+id} src={bP} alt="bP" onTouchStartCapture={choosePiece}/> :
        <img id={"bp" + id} className={"Figure bP"+id} src={bP} alt="bP" onMouseDownCapture={choosePiece}/>
    )

};

export default BlackPawnPiece;