import React from 'react'

function Filter({ makeItGreasy, greasy }) {
    
    function greasyHog() {
        makeItGreasy()
    }
    
    return (
        <button className="filterWrapper" onClick={greasyHog}>{ greasy ?  "Show All" : "Show Greased" }</button>
    )
}

export default Filter