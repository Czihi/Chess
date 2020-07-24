import React from "react";
import bK from "../images/blackKing.png";

const BlackKingPiece = (props) => {
    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let bk = document.getElementById("bk");
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(bk.offsetTop / 75);
        let offLeft = Math.floor(bk.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if ((offLeft === x - 1 && offTop === y - 1) || (offLeft === x - 1 && offTop === y) ||
                (offLeft === x - 1 && offTop === y + 1) || (offLeft === x && offTop === y - 1) ||
                (offLeft === x && offTop === y + 1) || (offLeft === x + 1 && offTop === y - 1) ||
                (offLeft === x + 1 && offTop === y) || (offLeft === x + 1 && offTop === y + 1)) {
                if (props.figures[y][x] === "free") {
                    bk.style.left = `${x * 75}px`;
                    bk.style.top = `${y * 75}px`;

                    let newFigures = [...props.figures];
                    newFigures[y][x] = "black bk";
                    newFigures[offTop][offLeft] = "free";
                    props.setState({figures: newFigures});
                    props.setState({turn: "white"})
                }
                else{
                    let fig=props.figures[y][x].split(" ");
                    if(fig[0] === "white"){
                        document.getElementById(fig[1]).style.display="none";
                        bk.style.left = `${x * 75}px`;
                        bk.style.top = `${y * 75}px`;

                        let newPiecesTaken = [...props.piecesTaken];
                        newPiecesTaken.push(props.figures[y][x]);

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "black bk";
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures, piecesTaken: newPiecesTaken});
                        props.setState({turn: "white"})
                    }
                }
            }
        }
      document.removeEventListener('click', move)
      bk.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="black") {
            document.addEventListener('click', move);
            let bk = document.getElementById("bk")
            bk.style.backgroundColor = "#aaaaaa";
        }
    }

    return (
        <img id="bk" className="Figure bK" src={bK} alt="bK" onMouseDownCapture={choosePiece}/>
    )
};
export default BlackKingPiece;