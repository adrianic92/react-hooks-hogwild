import React, { useState } from 'react'
import HiddenHog from './HiddenHog'

function HogCard({hog}) {
    const [hide, setHide] = useState(false);

    function hogHider() {
        setHide(hide => !hide)
    }

    return (
        <div className="ui card eight wide column pigTile" onClick={hogHider}>
            <img className="image" alt={hog.name} src={hog.image}/>
            <h3 className="content">{hog.name}</h3>
            {hide ? <HiddenHog  hog={hog} /> : null }
        </div>
    )
}

export default HogCard