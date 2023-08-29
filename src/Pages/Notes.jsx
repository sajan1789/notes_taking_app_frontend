import React from "react";
import { useState, useEffect } from "react";
import "../Styles/AddNotes.css";
import NoNotes from "./NoNotes";
import { useToast ,CircularProgress} from "@chakra-ui/react";
const Notes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const toast=useToast()
  const [notes, setNotes] = useState([]);
  console.log(notes);
  const getNotes = () => {
    setIsLoading(true)
    fetch("https://worrisome-goat-raincoat.cyclic.app/notes", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false)
        setNotes(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getNotes();
  }, []);
  const handleDelete = (id) => {
     setIsLoading2(true)
    fetch(`https://worrisome-goat-raincoat.cyclic.app/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res )=> res.json())
     .then((res)=>{
      setIsLoading2(false)
      console.log(res)
      getNotes()
      toast({
        position: 'top',
        title: 'Notes deleted successfull',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      
     })
     .catch((err)=>{
      console.log(err)
     })
  };
  if(isLoading){
    return <div style={{marginTop:"200px"}}><CircularProgress isIndeterminate color="blue.300" /></div>
  }
  return (
    <div className="notes-container">
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div key={index} className="note">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <p className="timestamp">Created on: {note.timestamp}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </div>
  );
};

export default Notes;
