import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function CreateToDo({ toDo, setToDo, getData }) {
  const url = "http://localhost:5000/api/save";
  const saveData = {
    toDo: toDo,
  };
  const saveToDo = async () => {
    if (!toDo) return alert("Please enter something...");
    try {
      const response = await axios.post(url, saveData);
      if (response.data) {
        console.log("Saved Successfully...");
      } else {
        console.log("Error occured");
      }
      setToDo("");
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <TextField
        // placeholder="Wha"
        label="What's your next task?"
        variant="outlined"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
          console.log(toDo);
        }}
        size="small"
        sx={{ backgroundColor: "white", borderRadius: "3px", width: "300px" }}
      />
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize", ml: "10px" }}
        onClick={saveToDo}
      >
        Save
      </Button>
    </Box>
  );
}

export default CreateToDo;
