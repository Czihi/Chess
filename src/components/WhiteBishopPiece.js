import React from "react";
import wB from "../images/whiteBishop.png";
import mobile from "./Mobile";

const WhiteBishopPiece = (props) => {
    const id=props.bishopID;
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
        let wb = document.getElementById("wb"+id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(wb.offsetTop / 75);
        let offLeft = Math.floor(wb.offsetLeft / 75);
        let directionY;
        let directionX;
        if(y>offTop){
            directionY=true
        }else{
            directionY=false
        }
        if(x>offLeft){
            directionX=true
        }else{
            directionX=false
        }
        let obstacle = false;
        if(directionX && directionY) {
            for (let i = offTop + 1, j = offLeft + 1; i < y && j < x; i++, j++) {
                if (props.figures[i][j] !== "free") {
                    obstacle = true;
                    break;
                }
            }
        }else{
            if(directionX && !directionY){
                for (let i = offTop - 1, j = offLeft + 1; i > y && j < x; i--, j++) {
                    if (props.figures[i][j] !== "free") {
                        obstacle = true;
                        break;
                    }
                }
            }else{
                if(!directionX && !directionY){
                    for (let i = offTop - 1, j = offLeft - 1; i > y && j > x; i--, j--) {
                        if (props.figures[i][j] !== "free") {
                            obstacle = true;
                            break;
                        }
                    }
                }else{
                    if(!directionX && directionY){
                        for (let i = offTop + 1, j = offLeft - 1; i < y && j > x; i++, j--) {
                            if (props.figures[i][j] !== "free") {
                                obstacle = true;
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600 && !obstacle) {
            if ((Math.abs(offLeft - x) === Math.abs(offTop - y))) {
                if (props.figures[y][x] === "free") {
                    wb.style.left = `${x * 75}px`;
                    wb.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wb"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "black"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "black"){
                        document.getElementById(fig[1]).style.display="none"
                        wb.style.left = `${x * 75}px`;
                        wb.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wb"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        wb.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let wb = document.getElementById("wb"+id);
            wb.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile?  <img id={"wb"+id} className={"Figure wB"+id} src={wB} alt="wB" onTouchStartCapture={choosePiece}/>:
        <img id={"wb"+id} className={"Figure wB"+id} src={wB} alt="wB" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteBishopPiece;