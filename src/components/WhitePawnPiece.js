import React, {useEffect} from "react";
import wP from "../images/whitePawn.png"


const WhitePawnPiece = (props) => {
    const id = props.pawnID;

    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let wp = document.getElementById("wp" + id);
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(wp.offsetTop / 75);
        let offLeft = Math.floor(wp.offsetLeft / 75);
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
            if (offLeft === x &&
                (offTop === y + 1 || (offTop === y + 2 && y + 2 === 6)) &&
                props.figures[y][x] === "free") {
                wp.style.left = `${x * 75}px`;
                wp.style.top = `${y * 75}px`;

                let newFigures = [...props.figures];
                newFigures[y][x] = "white wp" + id;
                newFigures[offTop][offLeft] = "free";
                props.setState({figures: newFigures});
                props.setState({turn: "black"})
            }
        }
        document.removeEventListener('click', move)
        wp.style.backgroundColor = "transparent";
    }

    function choosePiece() {
        if (props.turn === "white") {
            document.addEventListener('click', move);
            let wp = document.getElementById("wp" + props.pawnID)
            wp.style.backgroundColor = "#aaaaaa";
        }
    }

    useEffect(() => {
        let wpT = document.getElementById("wp" + id);
        wpT.style.left = `${id * 75}px`
    });

    return (
        <img id={"wp" + id} className="Figure wP" src={wP} alt="wP" onClick={choosePiece}/>
    )

};

export default WhitePawnPiece;