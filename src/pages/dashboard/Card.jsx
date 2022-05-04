import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function MediaCard({hotel}) {
  const {name, description, imgUrl} = hotel
  console.log(name)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl[0]}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Mostrar precios</Button>
      <Button variant="contained">Más Info</Button>

    </Stack>

      </CardActions>
    </Card>
  );
}
