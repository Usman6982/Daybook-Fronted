import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
 
  const notesInitial = [
    {
      "_id": "654744a46090cd776ff2f603",
      "user": "6540eb1a257e115c96d91205",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-11-05T07:30:44.977Z",
      "__v": 0
    },
    {
      "_id": "654745ca4f244d5526c5debc",
      "user": "6540eb1a257e115c96d91205",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-11-05T07:35:38.460Z",
      "__v": 0
    },
    {
      "_id": "65475cb3fc46821157d6b846",
      "user": "6540eb1a257e115c96d91205",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-11-05T09:13:23.143Z",
      "__v": 0
    },
    {
      "_id": "65475d8dfc46821157d6b849",
      "user": "6540eb1a257e115c96d91205",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2023-11-05T09:17:01.194Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(notesInitial)
   
   return ( 
  <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )

}
export default NoteState;
