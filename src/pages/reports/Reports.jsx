import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from "../../components/Chart";

const Reports = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <Chart/>          
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Reports