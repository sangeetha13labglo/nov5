
import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Example() {

  const [view, setView] = useState("");
  const [store, setStore] = useState([])
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState([])



  const handleChange = (e) => {
    setView(e.target.value);
  }

  const handleView = () => {
    setVisible(true)
    setStore([...store, view])
    setTime([...time, date])


  }
  const date = new Date().toTimeString()
  return (
    <>
      <TextField nam="name" onChange={handleChange}></TextField>
      <Button onClick={handleView}>View</Button>
      {
        visible ?
          <>
            <p>{store}</p><br />
            <p>{time}</p>
          </> :
          <></>
      }
    </>
  )
}