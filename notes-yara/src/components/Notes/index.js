import React from 'react'
import { render } from '@testing-library/react'

const Notes = (props) => {
    const { notes, filter } = props

    function getFilteredNotes() {
        if (filter === "All") {
            return notes
        }

        return notes.filter((eachNotes) => {
            return eachNotes.status === filter
        })
    }

  

    return <div>
        {notes ? getFilteredNotes().map((eachNotes) => {
            return <div key={notes.title}>{eachNotes.title}</div>
        }) : null}
    </div>
}

export default Notes