import React from "react";
import bP from "../images/blackPawn.png"

const BlackPawnPiece=(props)=>{
function move(event){
    let x = Math.floor(event.clientX/75);     // Get the horizontal coordinate
    let y = Math.floor(event.clientY/75);     // Get the vertical coordinate
    document.getElementById("bp1").style.left=`${x*75}px`;
    document.getElementById("bp1").style.top=`${y*75}px`;
    document.removeEventListener('click', move)
}
function choosePiece(event){
    console.log(event.clientX, event.clientY)
    document.addEventListener('click', move);
}

    return(
        <img id="bp1" className="Figure bP" src={bP} alt="bP" onClick={choosePiece}/>
    )
};

export default BlackPawnPiece;