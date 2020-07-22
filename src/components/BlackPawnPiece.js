import React, {useEffect} from "react";
import bP from "../images/blackPawn.png"


const BlackPawnPiece = (props) => {
    const id = props.pawnID;

    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let bp = document.getElementById("bp" + id);
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(bp.offsetTop / 75);
        let offLeft = Math.floor(bp.offsetLeft / 75);
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if (offLeft === x &&
                (offTop === y - 1 || (offTop === y - 2 && y - 2 === 1)) &&
                props.figures[y][x] === "free") {
                bp.style.left = `${x * 75}px`;
                bp.style.top = `${y * 75}px`;

                let newFigures = [...props.figures];
                newFigures[y][x] = "black bp" + id;
                newFigures[offTop][offLeft] = "free";
                props.setState({figures: newFigures});
                props.setState({turn: "white"})
            }
        }
        document.removeEventListener('click', move)
        bp.style.backgroundColor = "transparent";
    }

    function choosePiece() {
        if (props.turn === "black") {
            document.addEventListener('click', move);
            let bp = document.getElementById("bp" + id)
            bp.style.backgroundColor = "#aaaaaa";
        }
    }

    useEffect(() => {
        let bpT = document.getElementById("bp" + id);
        bpT.style.left = `${id * 75}px`
    });

    return (
        <img id={"bp" + id} className="Figure bP" src={bP} alt="bP" onClick={choosePiece}/>
    )

};

export default BlackPawnPiece;