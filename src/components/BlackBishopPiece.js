import React from "react";
import bB from "../images/blackBishop.png";

const BlackBishopPiece = (props) => {
    const id=props.bishopID;
    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let bb = document.getElementById("bb"+id);
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(bb.offsetTop / 75);
        let offLeft = Math.floor(bb.offsetLeft / 75);
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
                    bb.style.left = `${x * 75}px`;
                    bb.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bb"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "white"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none";
                        bb.style.left = `${x * 75}px`;
                        bb.style.top = `${y * 75}px`;

                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black bb"+id;
                        newFigures[offTop][offLeft] = "free";

                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "white"});
                    }
                }
            }
        }
        document.removeEventListener('click', move)
        bb.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('click', move);
            let bb = document.getElementById("bb"+id);
            bb.style.backgroundColor = "#aaaaaa";
        }
    }

    return (
        <img id={"bb"+id} className={"Figure bB"+id} src={bB} alt="bB" onMouseDownCapture={choosePiece}/>
    )
};
export default BlackBishopPiece;