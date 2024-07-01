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
      <Grid container direction='column'>
        <h1>List</h1>
        <Grid item>
          <AddCard onAdd={addCard} />
        </Grid>
        <Grid item>
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
