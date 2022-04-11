import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import TablenNotes from '../../components/TablenNotes';

const Notes = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{p: 2}}>
          <TablenNotes/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Notes