import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage3() {
  return (
    <Card sx={{ width: 915 }} elevation={0}>
      <CardMedia
        sx={{ height: 535,width: 915 }}
        image="/images/explore.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Seasonal Forecasts of Watershed Conditions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Create seasonal forecasts for your watershed on-demand for a variety of potential future weather conditions.
        </Typography>
      </CardContent>
    </Card>
  );
}
