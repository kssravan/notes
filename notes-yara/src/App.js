import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Filter, Notes, AddNotes } from './components'

function App() {

  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState("All")

  function onFilterSelect(type) {
    setFilter(type)
  }

  function onNotesAdd({ title, status }) {
    setNotes([...notes, {title:title, status:status}])
  }

  return (
    <div className="App">
      <Filter
        onFilterSelect={onFilterSelect}
      />
      <AddNotes
        onNotesAdd={onNotesAdd}
      />
      <Notes notes={notes} filter={filter}/>
     
    </div>
  );
}

export default App;
