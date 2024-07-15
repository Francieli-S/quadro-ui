import { useCallback, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { AddCard } from './AddCard';
import { Card } from './Card';

export interface ListProps {
  title: string;
}

export const ListCards = () => {
  interface Card {
    title: string;
  }

  const data: Array<Card> = [
    { title: 'Task 1' },
    { title: 'Task 2' },
    { title: 'Task 3' },
  ];

  const [cards, setCards] = useState<Card[]>(data);

  const addCard = useCallback((title: string) => {
    setCards((prev) => [
      {
        title,
      },
      ...prev,
    ]);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'cornflowerBlue' }}>
      <Grid container direction={'column'} rowSpacing={2} alignItems='center'>
        <Grid item xs={12}>
          <h1>List</h1>
        </Grid>
        <Grid item xs={12}>
          <AddCard onAdd={addCard} />
        </Grid>
        {cards.map((card) => (
          <Grid item xs={2}>
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
