import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteAlbum, updateAlbum } from '../actions/albums';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import TextField from '@mui/material/TextField';


export default function BasicCard({album}) {
  const dispatch = useDispatch();
  const [enableEdit, setEnableEdit] = React.useState(false);
  const titleRef = React.useRef(album.title);
  const userIdRef = React.useRef(album.userId);
  const update = ()=>{
    if(!(titleRef.current.value == album.title && userIdRef.current.value == album.userId)){
      dispatch(updateAlbum(album.id,
        {
          userId:userIdRef.current.value,
          title: titleRef.current.value
        }
      ))
      console.log(userIdRef.current.value)
    }
    setEnableEdit(false)
  }

  return (
    <Card sx={{ margin:"10px", width: 354 }}>
      <CardContent>
        
        {!enableEdit ? 
            <>
            <Typography gutterBottom variant="h5" component="div">
              userId {album.userId}
            </Typography>
            <Typography variant="body" color="text.secondary">
              {album.title}
            </Typography> 
            </>: 
            <>
             <TextField id="outlined-multiline-flexible" label="userId" 
             variant="outlined" sx={{marginBottom:"10px"}} defaultValue={album.userId} inputRef={userIdRef}/>
            <TextField id="outlined-multiline-flexible" label="Title" multiline
            maxRows={4} variant="outlined"  defaultValue={album.title} inputRef={titleRef}/>
            </>
            
        }
        
        
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
        {
          enableEdit ? 
          <div>
            <Button size="small" onClick={update}><DoneIcon/></Button>
            <Button size="small" onClick={()=>{setEnableEdit(false)}}><ClearIcon/></Button>
          </div> :
          <Button size="small" onClick={()=>{setEnableEdit(true)}}><EditIcon/></Button>
        }
        
        <Button size="small" onClick={() => dispatch(deleteAlbum(album.id))}><DeleteIcon/></Button>
      </CardActions>
    </Card>
  );
}
