import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Get All Notes
   const getNotes = async () => {
    //API Call for fetch all notes
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGViMWEyNTdlMTE1Yzk2ZDkxMjA1In0sImlhdCI6MTY5OTA0MDYxMn0.v2vv2zh0sqOsEUkUekHt0_KJb2YAcBkZS5u9b45oZjc"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)

  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO:API call

    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGViMWEyNTdlMTE1Yzk2ZDkxMjA1In0sImlhdCI6MTY5OTA0MDYxMn0.v2vv2zh0sqOsEUkUekHt0_KJb2YAcBkZS5u9b45oZjc"
      },

      body: JSON.stringify({title,description,tag}),
    });

    const json = await response.json();
    console.log(json)
    

    console.log("adding a New note")
    const note = {
      "_id": "65475d8dfc46821157d6b847",
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
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGViMWEyNTdlMTE1Yzk2ZDkxMjA1In0sImlhdCI6MTY5OTA0MDYxMn0.v2vv2zh0sqOsEUkUekHt0_KJb2YAcBkZS5u9b45oZjc"
      }
    });

    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MGViMWEyNTdlMTE1Yzk2ZDkxMjA1In0sImlhdCI6MTY5OTA0MDYxMn0.v2vv2zh0sqOsEUkUekHt0_KJb2YAcBkZS5u9b45oZjc"
      },

      body: JSON.stringify({title,description,tag}),
    });

    const json = await response.json();
    console.log (json);
    let newNotes = JSON.parse(JSON.stringify(notes))
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      

    }
    setNotes(newNotes);
  }

  return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;