import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from './CardList';
import { CartContext } from './CartContext';
import HomeIcon from '@mui/icons-material/Home';
import { OrderType } from '../types/OrderType';
import FreeBreakfastTwoToneIcon from '@mui/icons-material/FreeBreakfastTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
interface MyCartProps {}

export const MyCart: React.FC<MyCartProps> = () => {
  const { coffeList, setCoffeeList } = useContext(CartContext);

  return (
    <>
      <Grid container spacing={2} sx={{ py: 5 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#4a2c2a',
              fontSize: '5rem',
              fontFamily: 'Lucida Handwriting',
            }}
          >
            My Cart{' '}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            px: 3,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}
        >
          <Link to='/' style={{ textDecoration: 'none' }}>
            <IconButton sx={{ pt: 2 }} size='large'>
              Home
              <HomeIcon sx={{ fontSize: '50px', pl: 2 }} />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          justifyContent: 'center',
          justifyItems: 'center',
          display: 'flex',
        }}
      >
        {coffeList.length > 0 && (
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            {coffeList.map((coffee: OrderType) => (
              <ListItem
                key={coffee.id}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <DeleteTwoToneIcon />
                  </IconButton>
                }
              >
                <FreeBreakfastTwoToneIcon sx={{ pl: 3 }} />
                <ListItemText
                  sx={{ pl: 3 }}
                  disableTypography
                  primary={
                    <Typography variant='h6' style={{ color: '#4a2c2a' }}>
                      {coffee.title}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
};
