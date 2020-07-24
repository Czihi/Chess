import React from "react";
import wQ from "../images/whiteQueen.png";
import mobile from "./Mobile";

const WhiteQueenPiece = (props) => {
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
        let wq = document.getElementById("wq");
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(wq.offsetTop / 75);
        let offLeft = Math.floor(wq.offsetLeft / 75);
        let flag = false;
        if (y === offTop || x === offLeft) {
            flag = true;
        }
        let obstacle = false;
        if (flag) {
            if (offLeft < x) {
                for (let i = offLeft + 1; i < x; i++) {
                    if (props.figures[y][i] !== "free") {
                        obstacle = true;
                        break;
                    }
                }
            } else {
                if (offLeft > x) {
                    for (let i = offLeft - 1; i > x; i--) {
                        if (props.figures[y][i] !== "free") {
                            obstacle = true;
                            break;
                        }
                    }
                } else {
                    if (offTop < y) {
                        for (let i = offTop + 1; i < y; i++) {
                            if (props.figures[i][x] !== "free") {
                                obstacle = true;
                                break;
                            }
                        }
                    } else {
                        if (offTop > y) {
                            for (let i = offTop - 1; i > y; i--) {
                                if (props.figures[i][x] !== "free") {
                                    obstacle = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            let directionY;
            let directionX;
            if (y > offTop) {
                directionY = true
            } else {
                directionY = false
            }
            if (x > offLeft) {
                directionX = true
            } else {
                directionX = false
            }
            if (directionX && directionY) {
                for (let i = offTop + 1, j = offLeft + 1; i < y && j < x; i++, j++) {
                    if (props.figures[i][j] !== "free") {
                        obstacle = true;
                        break;
                    }
                }
            } else {
                if (directionX && !directionY) {
                    for (let i = offTop - 1, j = offLeft + 1; i > y && j < x; i--, j++) {
                        if (props.figures[i][j] !== "free") {
                            obstacle = true;
                            break;
                        }
                    }
                } else {
                    if (!directionX && !directionY) {
                        for (let i = offTop - 1, j = offLeft - 1; i > y && j > x; i--, j--) {
                            if (props.figures[i][j] !== "free") {
                                obstacle = true;
                                break;
                            }
                        }
                    } else {
                        if (!directionX && directionY) {
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
        }
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600 && !obstacle) {
            if ((Math.abs(offLeft - x) === Math.abs(offTop - y)) || (offLeft === x) || (offTop === y)) {
                if (props.figures[y][x] === "free") {
                    wq.style.left = `${x * 75}px`;
                    wq.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wq";
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "black"})
                } else {
                    let fig = props.figures[y][x].split(" ");
                    if (fig[0] === "black") {
                        document.getElementById(fig[1]).style.display = "none"
                        wq.style.left = `${x * 75}px`;
                        wq.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wq";
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        wq.style.backgroundColor = "transparent";
    }

    function choosePiece() {
        if (props.turn === "white") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let wq = document.getElementById("wq")
            wq.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile ?  <img id="wq" className="Figure wQ" src={wQ} alt="wQ" onTouchStartCapture={choosePiece}/>:
        <img id="wq" className="Figure wQ" src={wQ} alt="wQ" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteQueenPiece;