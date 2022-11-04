import React from 'react'

function HiddenHog({hog}) {
    return (
        <div className="extra content">
            <div>{hog.specialty}</div>
            <div>{hog.weight}</div>
            <div>{hog.greased}</div>
            <div>{hog["highest medal achieved"].toUpperCase()}</div>
        </div>
    )
}

export default HiddenHog