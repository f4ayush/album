import React, { useEffect } from 'react'
import BasicCard from "../utils/BasicCard"
import Typography from '@mui/material/Typography';
import { CircularProgress } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import { getAlbums } from '../actions/albums';

import "./Album.css"
export default function Album() {
    const albums = useSelector((state) => state.albums);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch]);


  return (
    <div>
        
        <div className='card-wrapper'>
 
    {
        !albums.length ? <CircularProgress/> :albums.map((album, i)=>{
            return <BasicCard key={i} album={album}/>
        })
    }
    </div>
    </div>
  )
}

