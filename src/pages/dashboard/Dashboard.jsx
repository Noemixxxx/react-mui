import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MediaCard from "./Card";
import { allTourism, setTitle } from "../../redux/appRedux";



const Dashboard = () => {
  const dispatch = useDispatch();
  const hoteles = useSelector(state => state.tourismReducer.tourism)
  

  useEffect(() => {
    dispatch(setTitle('Alojamiento Turismo'));
    dispatch(allTourism())
  },[dispatch]) 

  console.log(hoteles)

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper sx={{p: 5}}>
         { hoteles.map((hotel)=>{
           return <MediaCard hotel={hotel} />
         }) }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
