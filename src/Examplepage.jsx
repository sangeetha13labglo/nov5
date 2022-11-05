import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Differentiate() {

  const detail = ["mango", "orange", "pineapple", "kiwi"]
  const secondDetail = ["apple", "orange", "mango", "strawberry"]
  const [fruits, setFruits] = useState(detail);
  const [secondFruit, setSecondFruit] = useState(secondDetail);

  const handleClick = () => {
    const filtering = fruits.filter((ele) => !secondFruit.includes(ele))

  }
  console.log("filtering", filtering);
  return (
    <>
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </>
  )
}