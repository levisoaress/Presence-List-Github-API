import React from "react";
import './Card.css'

export default function Card(props){
    


    return(
        <div className="card">
            <div className="card-bloco">
                <h4>{props.name}</h4>
                <h4>{Number.parseFloat(props.nota).toFixed(1)}</h4>
                <h4>{props.time}</h4>
            </div>
        </div>
    )
}