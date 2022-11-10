import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { CoffeeCard } from './CoffeeCard';
export interface Coffee {
  description: string;
  id: number;
  image: string;
  ingredients: string[];
  title: string;
}
/* eslint-disable-next-line */
interface CardListProps {
  dataFiltered: Coffee[] | undefined}

export const CardList: React.FC<CardListProps> = ({ dataFiltered }) => {

  return (
    <Grid container justifyContent='center' spacing={2}>

      {dataFiltered?.map((coffee) => (
        <Grid key={coffee.id} item>
          <CoffeeCard key={coffee.id} coffee={coffee} />
        </Grid>
      ))}
    
    </Grid>
  
  );
};
