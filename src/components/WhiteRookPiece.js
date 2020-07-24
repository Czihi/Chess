import React from "react";
import wR from "../images/whiteRook.png";
import mobile from "./Mobile";

const WhiteRookPiece = (props) => {
    const id=props.rookID;
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
        let wr = document.getElementById("wr"+id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(wr.offsetTop / 75);
        let offLeft = Math.floor(wr.offsetLeft / 75);
        let obstacle=false;
        if(offLeft<x){
            for(let i=offLeft+1; i<x; i++){
                if(props.figures[y][i]!=="free"){
                    obstacle=true;
                    break;
                }
            }
        } else{
            if(offLeft>x){
                for(let i=offLeft-1; i>x; i--){
                    if(props.figures[y][i]!=="free"){
                        obstacle=true;
                        break;
                    }
                }
            } else{
                if(offTop<y){
                    for(let i=offTop+1; i<y; i++){
                        if(props.figures[i][x]!=="free"){
                            obstacle=true;
                            break;
                        }
                    }
                } else{
                    if(offTop>y){
                        for(let i=offTop-1; i>y; i--){
                            if(props.figures[i][x]!=="free"){
                                obstacle=true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600 && !obstacle) {
            if ( (offLeft === x) || (offTop===y)) {
                if (props.figures[y][x] === "free") {
                    wr.style.left = `${x * 75}px`;
                    wr.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "white wr"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "black"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "black"){
                        document.getElementById(fig[1]).style.display="none"
                        wr.style.left = `${x * 75}px`;
                        wr.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wr"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        wr.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let wr = document.getElementById("wr"+id);
            wr.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile? <img id={"wr"+id} className={"Figure wR"+id} src={wR} alt="wR" onTouchStartCapture={choosePiece}/>:
        <img id={"wr"+id} className={"Figure wR"+id} src={wR} alt="wR" onMouseDownCapture={choosePiece}/>
    )
};
export default WhiteRookPiece;