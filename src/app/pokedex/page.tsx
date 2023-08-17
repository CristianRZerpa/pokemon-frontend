import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from '@/components/MediaCard';

export default function PokedexPage() {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              heading="Bulbasaur"
              text="hp - defense - special-attack - special-defense - speed"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
              heading="Ivysaur"
              text="hp - defense - special-attack - special-defense - speed"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
              heading="Venusaur"
              text="hp - defense - special-attack - special-defense - speed"
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              heading="Charmander"
              text="hp - defense - special-attack - special-defense - speed"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}