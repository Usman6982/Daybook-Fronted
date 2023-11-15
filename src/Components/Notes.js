import React,{useContext,useEffect} from 'react'
import NoteContext from "../Context/notes/NoteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext); 
  const {notes,getNotes}=context;
  useEffect(() => {
    getNotes()
  }, [getNotes])
  
  return (
    <>
    <AddNote/>
    <div className="row my-3">
    <h2>You Notes</h2>
    {notes.map((note)=>{
      return <Noteitem key={note._id}note={note}/>
    })}
    </div>
    </>
  )
}

export default Notes
