import React from 'react'

function HogSorter({ sorter }) {
    
    function hogSort() {
        sorter()
    }
    
    return (
        <div>
            <h4 className="smallHeader">Sort By:</h4>
            <select onChange={hogSort}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default HogSorter