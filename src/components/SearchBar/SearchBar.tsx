import React from 'react';
import { Container, Input, Grid, Button } from '@mui/material';

export default function SearchBar(): JSX.Element | null {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item>
            <Input type='text' />
          </Grid>
          <Grid item>
            <Button type='submit'>Search</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
