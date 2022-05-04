import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TablenNotes from '../../components/TablenNotes';
import {setTitle} from '../../redux/appRedux';

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Descuento'));
  })

  return (
    <Grid container spacing={6}>
      <Grid item xs={15}>
        <Paper sx={{p: 5}}>
          <TablenNotes/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Notes