import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { CardList, Coffee } from './CardList';
import Fuse from 'fuse.js';
import { SearchBar } from './SearchBar';

const MainPage: React.FC = () => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>();
  const [searchText, setSearchText] = useState('');
  // const SEARCH_OPTIONS = { keys: ['title'] };
  // 'description', 'ingredients'

  // const fuse =
  //   coffeeData !== undefined ? new Fuse(coffeeData, SEARCH_OPTIONS) : '';
  // const results = fuse.search(searchText);
  // const coffeeResults =
  //   searchText.trim() !== '' && typeof results !== 'number'
  //     ? results.map((coffee) => coffee.item)
  //     : coffeeData;

  const filterData = (query: string, data: Coffee[] | undefined) => {
    if (!query) {
      return data;
    } else {

      return data?.filter(coffee=>coffee.title.toLowerCase().includes(query.toLowerCase()));
    }
  };
  const coffeeResults = filterData(searchText, coffeeData);

  const baseURL = 'https://api.sampleapis.com/coffee/hot';

  const bringData = () => {
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setCoffeeData(data);
      });
  };
  return (
    <Box sx={{ height: '300px' }}>
      <Typography
        sx={{
          color: '#4a2c2a',
          fontSize: '5rem',
          fontFamily: 'Lucida Handwriting',
          py: 5,
        }}
      >
        It's Coffee Time
      </Typography>
      {coffeeData === undefined && (
        <Button
          variant='outlined'
          size='medium'
          sx={{ color: '#4a2c2a', borderColor: '#4a2c2a',   "&:hover": {
            borderColor: "#4a2c2a"
          
          } }}
          onClick={bringData}
        >
          Show me the data
        </Button>
      )}
      {coffeeData !== undefined && (
        <Stack direction={'column'}>
          <SearchBar setSearchQuery={setSearchText} />
          <CardList dataFiltered={coffeeResults} />
        </Stack>
      )}
    </Box>
  );
};
export default MainPage;
