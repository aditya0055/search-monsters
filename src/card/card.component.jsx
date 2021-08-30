import React from 'react'
import './card.style.css'

const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`} alt="Monster" />
            <h3>{props.monster.name}</h3>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card
