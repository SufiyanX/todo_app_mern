import React from "react";
import { Box, Typography } from "@mui/material";
import Body from "./components/Body";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: "#e9e9e9",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          backgroundColor: "white",
        }}
      >
        <Typography
          sx={{ fontSize: "30px", fontWeight: "bold", color: "black" }}
        >
          ToDo App
        </Typography>
      </Box>
      <Body />
    </Box>
  );
}

export default App;
