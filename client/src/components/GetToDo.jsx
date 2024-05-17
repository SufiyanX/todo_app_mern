import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import ToDoCard from "./ToDoCard";

function GetToDo({ data, getData }) {
  return (
    <Box display="flex" justifyContent="center" mt="20px">
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          width: { xs: "350px", md: "700px", lg: "1000px" },
        }}
      >
        {data?.map((item, index) => {
          return <ToDoCard item={item} key={item._id} getData={getData} />;
        })}
      </Box>
    </Box>
  );
}

export default GetToDo;
