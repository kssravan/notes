import React, { useState } from 'react'

const AddNotes = (props) => {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")

    return <div>
        <label className="" data-testid="">Title of the notes</label>
        <input
            data-testid="app-input2"
            autoComplete="off"
            className="ml-3 mr-3"
            placeholder="Title"
            value={title}
            onChange={(event) => {
                setTitle(event.target.value)
            }}
        />

        <label className="" data-testid="">Status of the notes</label>
        <input
            data-testid="app-input2"
            autoComplete="off"
            className="ml-3 mr-3"
            placeholder="Status"
            value={status}
            onChange={(event) => {
                setStatus(event.target.value)
            }}
        />

        <button className="buttonContainer" onClick={() => {
            if (title.length === 0) {
                return
            }

            if (status.length === 0) {
                return
            }

            props.onNotesAdd({ title, status })
            setTitle("")
            setStatus("")

        }} >Add Notes</button>

    </div>
}

export default AddNotes