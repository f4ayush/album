import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { createAlbum } from '../actions/albums';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({showModal, setshowModal}) {
  const handleClose = () => setshowModal(false);
  const titleRef = React.useRef();
  const userIdRef = React.useRef();
  const idRef = React.useRef();
  const dispatch = useDispatch();
  const saveButtonHandler = ()=>{
    const title = titleRef.current.value
    const userId = userIdRef.current.value
    const id = idRef.current.value
    console.log(title, userId, id)
    if(title && id && userId){
      dispatch(createAlbum(
        {
          id,
          userId,
          title
        }
      ))
      setshowModal(false)
    }
  }

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 14, textAlign: "center"}} color="text.primary" gutterBottom variant='h5'>
          Create Album
          </Typography>
          <div className='modal-inputs' style={{display:"flex", justifyContent: "space-between"}}>
          <TextField id="outlined-basic" label="Id" variant="outlined" sx={{marginBottom:"10px", maxWidth: "40%"}} inputRef={idRef}/>
          <TextField id="outlined-multiline" label="userId" 
            variant="outlined" sx={{marginBottom:"10px"}} inputRef={userIdRef}/>
          </div>
          <TextField id="outlined-multiline-static" sx={{marginBottom:"10px", width:"100%"}} label="Title" multiline
            rows={4} variant="outlined" inputRef={titleRef}/>
            <div><Button onClick={saveButtonHandler} variant="contained">Save</Button></div>
            
        </Box>
      </Modal>
    </div>
  );
}