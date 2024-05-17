import { Box, Checkbox, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import axios from "axios";
import EditToDo from "./EditToDo";

function ToDoCard({ item, getData }) {
  const [checked, setChecked] = useState(false);
  const { _id, toDo } = item;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/delete/${_id}`
      );
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      width="300px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        minHeight: "50px",
        backgroundColor: "white",
        borderRadius: "5px",
        px: "10px",
        marginY: "10px",
        marginX: { xs: "0px", md: "10px" },
      }}
    >
      <Box display="flex" alignItems="center">
        <Checkbox
          size="small"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography
          sx={{
            fontSize: "15px",
            textDecoration: checked ? "line-through" : "none",
            fontStyle: checked ? "italic" : "",
            textWrap: "wrap",
            width: "160px",
          }}
        >
          {toDo}
        </Typography>
      </Box>
      <Box display="flex">
        <EditToDo item={item} getData={getData} />

        <Tooltip title="Delete">
          <IconButton
            onClick={() => {
              if (window.confirm("Are you sure to delete this todo?...")) {
                handleDelete();
              }
            }}
          >
            <DeleteTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default ToDoCard;
