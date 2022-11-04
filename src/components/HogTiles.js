import React from 'react'
import HogCard from './HogCard'

function HogTiles( { hogs }) {

    const tiles = hogs.map(hog => {return (
        <HogCard key={hog.name} hog={hog} />
    )})
    return (
        <div className="ui three stackable cards">{tiles}</div>
    )
}

export default HogTiles