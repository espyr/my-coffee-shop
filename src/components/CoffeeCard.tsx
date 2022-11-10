import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from '@mui/material';
import React from 'react';
import { Coffee } from './CardList';

/* eslint-disable-next-line */
interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  return (
    <Card sx={{ width: 400, height: 600 }}>
      <CardMedia component='img' height='400' image={coffee.image} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {coffee.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {coffee.description}
        </Typography>
        <Typography variant='body2'>
          {`Ingendients:  ${coffee.ingredients}`}
        </Typography>
      </CardContent>
    </Card>
  );
};
