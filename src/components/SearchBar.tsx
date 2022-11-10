import {
  TextField,
  IconButton,
  Box,
  Input,
  InputAdornment,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
interface SearchBar {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBar> = ({ setSearchQuery }) => {
  return (
    <Box sx={{ justifyItems: 'center', py: 3 }}>
      <TextField
        sx={{
          '& label.Mui-focused': {
            color: '#4a2c2a',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4a2c2a',
              color: '#4a2c2a',
            },

            '&.Mui-focused fieldset': {
              borderColor: '#4a2c2a',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        label='Enter Coffee Name'
        placeholder='Search...'
        size='small'
      />
    </Box>
  );
};
