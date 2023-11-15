import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
 
  const notesInitial = [
    {
      "_id": "654744a46090cd776ff2f603",
      "user": "6540eb1a257e115c96d912051",
      "title": "title1",
      "description": "Please wake up early 1",
      "tag": "personal",
      "date": "2023-11-05T07:30:44.977Z",
      "__v": 0
    },
    {
      "_id": "654745ca4f244d5526c5debc",
      "user": "6540eb1a257e115c96d912052",
      "title": "My Title2",
      "description": "Please wake up early 2",
      "tag": "personal",
      "date": "2023-11-05T07:35:38.460Z",
      "__v": 0
    },
    {
      "_id": "65475cb3fc46821157d6b846",
      "user": "6540eb1a257e115c96d912053",
      "title": "My Title3",
      "description": "Please wake up early 3",
      "tag": "personal",
      "date": "2023-11-05T09:13:23.143Z",
      "__v": 0
    },
    {
      "_id": "65475d8dfc46821157d6b844",
      "user": "6540eb1a257e115c96d912054",
      "title": "My Title4",
      "description": "Please wake up early 4",
      "tag": "personal",
      "date": "2023-11-05T09:17:01.194Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(notesInitial)

  //Add a Note
  const addNote= (title,description,tag) =>{
    //TODO:API call
    console.log("adding a New note")
    const note =  {
      "_id": "65475d8dfc46821157d6b849",
      "user": "6540eb1a257e115c96d912054",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-11-05T09:17:01.194Z",
      "__v": 0
    }

    setNotes(notes.concat(note))

  }
  //Delete a Note
 const deleteNote= () =>{
    
  }

  //Edit a Note
  const editNote= () =>{

  }
   
   return ( 
  <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
    )

}
export default NoteState;
