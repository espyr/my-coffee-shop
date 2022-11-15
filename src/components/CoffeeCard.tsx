import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from '@mui/material';
import React, { useContext } from 'react';
import { Coffee } from './CardList';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { CartContext } from './CartContext';
import { CoffeDialog } from './CoffeDialog';
interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card
        sx={{
          width: 400,
          height: 620,
        }}
      >
        <CardMedia component='img' height='400' image={coffee.image} />
        <CardContent sx={{ justifyContent: 'space-between', height: '130px' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {coffee.title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
          >
            {coffee.description}
          </Typography>
          <Typography variant='body2'>
            {`Ingendients:  ${coffee.ingredients}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{ color: '#4a2c2a' }}
            startIcon={<ShoppingCartSharpIcon />}
            size='large'
            onClick={() => setOpen(true)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <CoffeDialog open={open} setOpen={setOpen} coffee={coffee} />
    </>
  );
};
