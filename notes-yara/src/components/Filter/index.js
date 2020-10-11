import React from 'react'

const Filter = (props) => {
    return <div>
        <button className="buttonContainer" onClick={() => {
            props.onFilterSelect("All")
        }} >All</button>
        <button className="buttonContainer" onClick={() => {
            props.onFilterSelect("Active")
        }} >Active</button>
        <button className="buttonContainer" onClick={() => {
            props.onFilterSelect("Completed")
        }} >Completed</button>
    </div>
}

export default Filter