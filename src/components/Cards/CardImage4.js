import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardImage4() {
  return (
    <Card sx={{ width: 512 }} elevation={0}>
      <CardMedia
        sx={{ height: 323,width: 512 }}
        image="/images/helpside.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        More Information and Guidance
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Use the right-hand sidebar for more information, in addition to educational resources to learn about we use machine learning, training and more.
        </Typography>
      </CardContent>
    </Card>
  );
}
