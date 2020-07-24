import React from "react";
import wP from "../images/whitePawn.png"
import mobile from "./Mobile";

const WhitePawnPiece = (props) => {
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
        let wp = document.getElementById("wp" + id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(wp.offsetTop / 75);
        let offLeft = Math.floor(wp.offsetLeft / 75);
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if (offLeft === x &&
                (offTop === y + 1 || (offTop === y + 2 && y + 2 === 6 && props.figures[y+1][x]==="free")) &&
                props.figures[y][x] === "free") {
                wp.style.left = `${x * 75}px`;
                wp.style.top = `${y * 75}px`;

                let newFigures = [...props.figures];
                newFigures[y][x] = "white wp" + id;
                newFigures[offTop][offLeft] = "free";
                props.setState({figures: newFigures});
                props.setState({turn: "black"})
            }
            else{
                let fig=props.figures[y][x].split(" ");
                if(offTop === y+1 && (offLeft===x+1 || offLeft===x-1) && fig[0]==="black"){
                    document.getElementById(fig[1]).style.display="none";
                    wp.style.left = `${x * 75}px`;
                    wp.style.top = `${y * 75}px`;
                    let newPiecesTaken = [...props.piecesTaken];
                    newPiecesTaken.push(props.figures[y][x]);
                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wp" + id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                    props.setState({turn: "black"});
                }
            }
        }
        document.removeEventListener('mouseup', move);
        document.removeEventListener('touchend', move);
        wp.style.backgroundColor = "transparent";


    }

    function choosePiece() {
        if (props.turn === "white") {
            document.addEventListener('mouseup', move);
            document.addEventListener('touchend', move);
            let wp = document.getElementById("wp" + props.pawnID)
            wp.style.backgroundColor = "#aaaaaa";
        }
    }


        return (mobile ?(<img id={"wp" + id} className={"Figure wP" + id} src={wP} alt="wP" onTouchStartCapture={choosePiece}/>)
        : <img id={"wp" + id} className={"Figure wP" + id} src={wP} alt="wP" onMouseDownCapture={choosePiece}/>)


};

export default WhitePawnPiece;