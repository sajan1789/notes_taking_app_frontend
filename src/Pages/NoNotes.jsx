import React from 'react'
import '../Styles/NoNotes.css'
import { Link } from 'react-router-dom'
const NoNotes = () => {
  return (

     <div className="no-notes-container" >
      <div className="no-notes-content">
        <h2>No Notes Yet</h2>
        <p>You haven't created any notes yet. Start jotting down your thoughts and ideas by creating your first note!</p>
       <Link to='/addnotes'>  <button className="create-note-button">Create Note</button></Link>
      </div>
    
    </div>
  )
}

export default NoNotes