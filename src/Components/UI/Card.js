import React from "react";
import './Card.css'

const Card = (props) =>{
    return (
    <>
    <div className="card input users ">
        {props.children}
    </div>
    </>

    )
}

export default Card;