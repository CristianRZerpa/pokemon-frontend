"use client";
import React, { Component } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MediaCard from '@/components/MediaCard';
import * as ReactDOMServer from "react-dom/server";

function WavesSVG({ color }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1200">
      <path
        fill={color}
        fill-opacity= '.20'
        d="M0 641L64 636.3C128 631.7 256 622.3 384 640.2C512 658 640 703 768 724.8C896 746.7 1024 745.3 1152 728.2C1280 711 1408 678 1536 669.3C1664 660.7 1792 676.3 1856 684.2L1920 692L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z">
      </path>
      <path
        fill={color}
        d="M0 893L64 892.2C128 891.3 256 889.7 384 885.5C512 881.3 640 874.7 768 856.7C896 838.7 1024 809.3 1152 820C1280 830.7 1408 881.3 1536 889.7C1664 898 1792 864 1856 847L1920 830L1920 1081L1856 1081C1792 1081 1664 1081 1536 1081C1408 1081 1280 1081 1152 1081C1024 1081 896 1081 768 1081C640 1081 512 1081 384 1081C256 1081 128 1081 64 1081L0 1081Z">
      </path>
    </svg>
  );
}

class PokedexPage extends Component {

  state = {
    pokemonId: '',
    imageUrl: '',
    pokemonName: '',
    pokemonDescription: '',
    pokemonColor: ''
  }

  onChange = async (e: React.ChangeEvent<any>) => {
    e.persist();
    await this.setState({ pokemonId: e.target.value });
  }

  handleClick = async () => {

    axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonId)
      .then(({ data }) => {
        console.log(data);

        this.setState({
          imageUrl: data.sprites.other['official-artwork'].front_default,
          pokemonName: data.name,
        });
      });

    axios.get("https://pokeapi.co/api/v2/pokemon-species/" + this.state.pokemonId)
      .then(({ data }) => {
        console.log(data.color.name);

        this.setState({
          pokemonDescription: data.flavor_text_entries[0].flavor_text,
          pokemonColor: data.color.name,
        });
      });
  };

  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            ReactDOMServer.renderToStaticMarkup(
              <WavesSVG color={this.state.pokemonColor} />)
          )}")`,
          height: "100vh",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            float: 'right',
          }}
        >
          <Grid xs={6}>
            <TextField id="pokemon-number" label="#" variant="outlined"
              value={this.state.pokemonId}
              onChange={this.onChange}
            />
          </Grid>
          <Grid xs={6}>
            <Button variant="contained" color="primary"
              onClick={this.handleClick}>
              Buscar
            </Button>
          </Grid>
        </div>
        <Box>
          <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid xs={6}>
              <MediaCard
                img={this.state.imageUrl}
                heading={this.state.pokemonName}
                text={this.state.pokemonDescription}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default PokedexPage;