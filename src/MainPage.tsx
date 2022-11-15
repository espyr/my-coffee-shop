import { Badge, Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './components/SearchBar';
import { CardList, Coffee } from './components/CardList';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Link } from "react-router-dom";
import { CartContext } from './components/CartContext';



export const MainPage: React.FC = () => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>([]);
  const [searchText, setSearchText] = useState('');
  const SEARCH_OPTIONS = { keys: ['title', 'ingredients'] };
  const { coffeList } = useContext(CartContext)
  function containsNumbers(str: string) {
    return /\d/.test(str);
  }
  const fuse =
    coffeeData !== undefined ? new Fuse(coffeeData, SEARCH_OPTIONS) : '';
  const results = fuse.search(searchText);
  const coffeeResults =
    searchText.trim() !== '' && typeof results !== 'number'
      ? results.map((coffee) => coffee.item)
      : coffeeData;

  const baseURL = 'https://api.sampleapis.com/coffee/hot';
  const bringData = () => {
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data: Coffee[]) => {
        setCoffeeData(data.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.title === value.title && !containsNumbers(t.title)
          ))
        ));
      })
  };
  return (
    <>
      <Grid container spacing={2} sx={{ py: 5 }}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#4a2c2a',
              fontSize: '5rem',
              fontFamily: 'Lucida Handwriting',
            }}
          >
            It's Coffee Time
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{
          px: 3, display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <IconButton sx={{ pt: 2 }} size='large'> My Cart
              <Badge badgeContent={coffeList.length} color="success">

                <ShoppingCartSharpIcon sx={{ fontSize: '50px', pl: 2 }} />
              </Badge>
            </IconButton>
          </Link>
        </Grid>

      </Grid>

      {coffeeData?.length <= 0 && (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button
            variant='outlined'
            size='medium'
            sx={{
              fontWeight: "bold",

              fontSize:'20px',
              fontStyle:'italic',
              color: '#4a2c2a',
              borderColor: '#4a2c2a',
              '&:hover': {
                borderColor: '#4a2c2a',
              },
            }}
            onClick={bringData}
          >
            Show me the Coffee Menu
          </Button>
        </Box>
      )}
      {coffeeData?.length > 0 && (
        <Stack direction={'column'}>
          <SearchBar setSearchQuery={setSearchText} />
          <CardList dataFiltered={coffeeResults} />
        </Stack>
      )}
    </>
  );
};
export default MainPage;