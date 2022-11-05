import { Button, Card, CardContent, CircularProgress, LinearProgress, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Registerpage() {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log(state)
  }

  const storage = [
    "Student name",
    "Class",
    "Email id",
    "Date of Birth",
    "Residential Address",
    "Contact Number",
    "Father's Name",
    "Occupation",
    "Father's Number",
    "Mother's Name",
    "Occupation",
    "Brother's Name",
    "Qualification"
  ]

  return (
    <div>
      <Card sx={{ width: "400px", marginTop: "50px", backgroundColor: "aqua", marginLeft: "700px" }}>
        <CardContent>
          <center><h1>Student Form</h1></center>
          {
            storage.map((el) => {
              return (
                <>
                  <TextField
                    name={el}
                    id="standard-password-input"
                    type="text"
                    autoComplete="current-password"
                    variant="standard"
                    label={el}
                    onChange={handleChange}
                    
                  />
                  <br />
                  <br />  
                </>
              )
            })
          }
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}