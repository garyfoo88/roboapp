import React from 'react'

const Card = ({id, email, name}) =>{
    return (
        <div className="tc br3 bg-gold dib grow pa3 ma2 bw2 shadow-3">
            <img alt="robot" src={`https://robohash.org/${id}?size=100x100`}></img>
            <h3>{name}</h3>
            <p>{email}</p>
            test
        </div>
    )
}

export default Card