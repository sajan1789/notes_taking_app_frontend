import React, { useState } from 'react';
import '../Styles/AddNotes.css'
import { useToast,CircularProgress } from '@chakra-ui/react'
const AddNotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      content,
      timestamp: new Date().toLocaleString() 
    };
    setIsLoading(true);
    
     fetch('https://worrisome-goat-raincoat.cyclic.app/notes/add',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Authorization":`${localStorage.getItem('token')}`
      },
      body:JSON.stringify(newNote)
     }).then(res=>res.json())
     .then((res)=>{
      console.log(res)
      setIsLoading(false);
      
      toast({
        position: 'top',
        title: 'Notes added',
        description: "Notes has been added Successfull",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setContent('');
      setTitle('');
     })
     .catch((err)=>console.log(err))
    
  };

  return (
    <div className="notes-container">
      <form className="notes-form" onSubmit={handleAddNote}>
        <h2>Create a Note</h2>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
       {!isLoading &&<button type="submit" className="login-button">
          Add Note
        </button>}
        {isLoading && <CircularProgress isIndeterminate color="blue.300" />}
      </form>
    </div>
  );
};

export default AddNotes;
