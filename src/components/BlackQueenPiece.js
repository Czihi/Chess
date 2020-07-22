import React from "react";
import bQ from "../images/blackQueen.png";


const BlackQueenPiece=(props)=>{
    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let bq = document.getElementById("bq");
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(bq.offsetTop / 75);
        let offLeft = Math.floor(bq.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((Math.abs(offLeft - x) === Math.abs(offTop - y)) || (offLeft === x) || (offTop===y)) {
                if (props.figures[y][x] === "free") {
                    bq.style.left = `${x * 75}px`;
                    bq.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bq";
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                }else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none"
                        bq.style.left = `${x * 75}px`;
                        bq.style.top = `${y * 75}px`;

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black bq";
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures});
                        props.setState({turn: "white"})
                    }
                }
            }
        }
        document.removeEventListener('click', move)
        bq.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('click', move);
            let bq = document.getElementById("bq")
            bq.style.backgroundColor = "#aaaaaa";
        }
    }
    return(
        <img id="bq" className="Figure bQ" src={bQ} alt="bQ"  onClick={choosePiece}/>
    )
};
export default BlackQueenPiece;