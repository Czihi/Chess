import React from "react";
import bR from "../images/blackRook.png";
import mobile from "./Mobile";

const BlackRookPiece = (props) => {
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
        let br = document.getElementById("br"+id);
        let x = Math.floor(x1 / 75);
        let y = Math.floor(y1 / 75);
        let offTop = Math.floor(br.offsetTop / 75);
        let offLeft = Math.floor(br.offsetLeft / 75);
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
                    br.style.left = `${x * 75}px`;
                    br.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black br"+id;
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "white"})
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none"
                        br.style.left = `${x * 75}px`;
                        br.style.top = `${y * 75}px`;
                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);
                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black br"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "white"})
                    }
                }
            }
        }
        document.removeEventListener('touchend', move);
        document.removeEventListener('mouseup', move);
        br.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('touchend', move);
            document.addEventListener('mouseup', move);
            let br = document.getElementById("br"+id);
            br.style.backgroundColor = "#aaaaaa";
        }
    }

    return (mobile ? <img id={"br"+id} className={"Figure bR"+id} src={bR} alt="bR" onTouchStartCapture={choosePiece}/>:
        <img id={"br"+id} className={"Figure bR"+id} src={bR} alt="bR" onMouseDownCapture={choosePiece}/>
    )
};
export default BlackRookPiece;