import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: "5px",
};

export default function EditToDo({ item, getData }) {
  const { _id, toDo } = item;
  const [open, setOpen] = useState(false);
  const [editToDo, setEditToDo] = useState(toDo);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditToDo(toDo);
  };

  const postData = {
    toDo: editToDo,
  };

  const updateToDo = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/update/${_id}`,
        postData
      );
      handleClose();
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={handleOpen}>
          <EditTwoToneIcon />
        </IconButton>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              borderBottom: "1px solid grey",
              p: "25px 10px",
            }}
          >
            <Typography fontSize="20px">Edit To-Do</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: " 15px",
            }}
          >
            <TextField
              label="Edit your task!"
              variant="outlined"
              value={editToDo}
              onChange={(e) => {
                setEditToDo(e.target.value);
              }}
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "3px",
                width: "100%",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                mt: "10px",
              }}
            >
              <Button
                variant="outlined"
                sx={{ textTransform: "capitalize", ml: "10px" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize", ml: "10px" }}
                onClick={updateToDo}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
