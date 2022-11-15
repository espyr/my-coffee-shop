import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Stack,
  Box,
} from '@mui/material';
import React, { useContext } from 'react';
import { OrderType, Sugar } from '../types/OrderType';
import { Coffee } from './CardList';
import { CartContext } from './CartContext';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Typography } from '@mui/material';
import { getUid } from './getUid';
interface CoffeDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  coffee: Coffee;
}

export const CoffeDialog: React.FC<CoffeDialogProps> = ({
  open,
  setOpen,
  coffee,
}) => {
  const { coffeList, setCoffeeList } = useContext(CartContext);

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const { handleSubmit, control, reset } = useForm<OrderType>({
    defaultValues: {
      orderId: getUid(),
      quantity: 0,
      comments: '',
      sugar: Sugar.Black,
      extraMilk: false,
    },
  });
  const OnSubmit: SubmitHandler<OrderType> = (data) => {
    const newCoffee = { ...coffee, ...data };
    console.log(newCoffee);
    setCoffeeList([...coffeList, newCoffee]);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ alignSelf: 'center', py: 2 }}>
        <Typography variant='h4'>{coffee.title}</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <DialogContent>
          <section>{coffee.description}</section>
          <Typography variant='h6'>{`Ingredients:  ${coffee.ingredients}`}</Typography>
          <Box sx={{ pt: 3 }}>
            <section>
              <Typography variant='h5'>Sugar</Typography>
              <Controller
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value={Sugar.Black}
                      control={
                        <Radio
                          sx={{
                            '&, &.Mui-checked': {
                              color: '#4a2c2a',
                            },
                          }}
                        />
                      }
                      label='Black'
                    />
                    <FormControlLabel
                      value={Sugar.Medium}
                      control={
                        <Radio
                          sx={{
                            '&, &.Mui-checked': {
                              color: '#4a2c2a',
                            },
                          }}
                        />
                      }
                      label='Medium'
                    />
                    <FormControlLabel
                      value={Sugar.Sweet}
                      control={
                        <Radio
                          sx={{
                            '&, &.Mui-checked': {
                              color: '#4a2c2a',
                            },
                          }}
                        />
                      }
                      label='Sweet'
                    />
                  </RadioGroup>
                )}
                name='sugar'
                control={control}
              />
            </section>
            <section>
              <Typography variant='h5'>Extra Milk</Typography>
              <Controller
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <FormControlLabel
                      value={true}
                      control={
                        <Radio
                          sx={{
                            '&, &.Mui-checked': {
                              color: '#4a2c2a',
                            },
                          }}
                        />
                      }
                      label='Yes'
                    />
                    <FormControlLabel
                      value={false}
                      control={
                        <Radio
                          sx={{
                            '&, &.Mui-checked': {
                              color: '#4a2c2a',
                            },
                          }}
                        />
                      }
                      label='No'
                    />
                  </RadioGroup>
                )}
                name='extraMilk'
                control={control}
              />
            </section>

            <Stack direction='column'>
              <Typography variant='h5'>Comments</Typography>
              <Controller
                render={({ field }) => <TextField {...field} />}
                name='comments'
                control={control}
              />
            </Stack>
          </Box>
        </DialogContent>
      </form>
      <DialogActions>
        <Button sx={{ color: '#4a2c2a' }} onClick={handleClose}>
          Cancel
        </Button>
        <Button sx={{ color: '#4a2c2a' }} onClick={handleSubmit(OnSubmit)}>
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};
