import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteAlbum } from '../actions/albums';


export default function BasicCard({album}) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ margin:"10px", width: 354 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          userId {album.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {album.title}
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
        <Button size="small"><EditIcon/></Button>
        <Button size="small" onClick={() => dispatch(deleteAlbum(album.id))}><DeleteIcon/></Button>
      </CardActions>
    </Card>
  );
}
