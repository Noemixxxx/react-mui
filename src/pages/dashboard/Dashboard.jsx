import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { pulse, flipInX } from 'react-animations';
import { keyframes } from '@mui/material/styles';
import Cover1Img from '../../assets/images/covers/cover_1.jpg'
import Cover2Img from '../../assets/images/covers/cover_2.jpg'

const PulseAnimation = keyframes`${pulse}`;
const FlipInXAnimation = keyframes`${flipInX}`;
const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              animation: `infinite 5s ${PulseAnimation}` 
            }}
            alt=""
            src={Cover1Img}
          />
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              animation: `infinite 5s ${FlipInXAnimation}` 
            }}
            alt=""
            src={Cover2Img}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
