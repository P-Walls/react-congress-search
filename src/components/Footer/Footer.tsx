import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Footer(): JSX.Element | null {
  return(
    <Box>
      <Container>
        <Grid container>
          <Grid item>
            <Typography>About Us</Typography>
          </Grid>
          <Grid item>
            <Typography>Full List of Senators</Typography>
          </Grid>
          <Grid item>
            <Typography>Official US Senate Website</Typography>
          </Grid>
          <Grid item>
            <Typography>Contact Us</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}