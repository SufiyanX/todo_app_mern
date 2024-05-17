import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateToDo from "./CreateToDo";
import GetToDo from "./GetToDo";
import axios from "axios";

function Body() {
  const [toDo, setToDo] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ height: "90%" }}>
      <CreateToDo toDo={toDo} setToDo={setToDo} getData={getData} />
      <GetToDo data={data} setData={setData} getData={getData} />
    </Box>
  );
}

export default Body;
