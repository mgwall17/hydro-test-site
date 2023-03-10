import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage1() {
  return (
    <Card sx={{ width: 512 }} elevation={0}>
      <CardMedia
        sx={{ height: 323,width: 512 }}
        image="/images/observations.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        National Observation Gateway
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Seamless browsing and download of observed watershed conditions (streamflow, groundwater and snow) in one place.
        </Typography>
      </CardContent>
    </Card>
  );
}
