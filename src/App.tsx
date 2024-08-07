// import { useCallback, useState } from 'react';
import './App.css';

import { ListCards } from './components/ListCards';
import { Box, Grid } from '@mui/material';

function App() {
  // interface List {
  //   title: string;
  // }

  // const [lists, setLists] = useState<List[]>([]);

  // const addList = useCallback((title: string) => {
  //   setLists((prev) => [
  //     {
  //       title,
  //     },
  //     ...prev,
  //   ]);
  // }, []);

  return (
    <Box sx={{ width: '800px' }}>
      <Grid container columnSpacing={6}>
        <Grid item xs={12} md={4}>
          <ListCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <ListCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <ListCards />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
