import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: "5px",
};

export default function EditToDo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <TextField
              placeholder="What's your next task?"
              label="What's your next task?"
              variant="outlined"
              //   value={toDo}
              //   onChange={(e) => {
              //     setToDo(e.target.value);
              //     console.log(toDo);
              //   }}
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "3px" }}
            />
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", ml: "10px" }}
              //   onClick={saveToDo}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
