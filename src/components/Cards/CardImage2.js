import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage2() {
  return (
    <Card sx={{ width: 915 }} elevation={0}>
      <CardMedia
        sx={{ height: 535,width: 915 }}
        image="/images/conditions.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        National Current Conditions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Explore and download areas of interest from our national soil moisture and water table depth current condition products
        </Typography>
      </CardContent>
    </Card>
  );
}
