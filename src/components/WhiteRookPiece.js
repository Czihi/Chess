import React from "react";
import wR from "../images/whiteRook.png";

const WhiteRookPiece = (props) => {
    const id=props.rookID;
    function move(event) {
        let y1 = event.clientY;
        let x1 = event.clientX;
        let wr = document.getElementById("wr"+id);
        let x = Math.floor(event.clientX / 75);
        let y = Math.floor(event.clientY / 75);
        let offTop = Math.floor(wr.offsetTop / 75);
        let offLeft = Math.floor(wr.offsetLeft / 75)
        if (x1 >= 0 && x1 <= 600 && y1 >= 0 && y1 <= 600) {
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

                        let newFigures = [...props.figures];
                        newFigures[y][x] = "white wr"+id;
                        newFigures[offTop][offLeft] = "free";
                        props.setState({figures: newFigures});
                        props.setState({turn: "black"})
                    }
                }
            }
        }
        document.removeEventListener('click', move)
        wr.style.backgroundColor="transparent";
    }

    function choosePiece() {
        if(props.turn==="white") {
            document.addEventListener('click', move);
            let wr = document.getElementById("wr"+id);
            wr.style.backgroundColor = "#aaaaaa";
        }
    }

    return (
        <img id={"wr"+id} className={"Figure wR"+id} src={wR} alt="wR" onClick={choosePiece}/>
    )
};
export default WhiteRookPiece;