import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { getPokemons } from 'store/actions/pokemonsActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    app: {
        padding: "1rem 3rem"
    },
    pokemonInput: {
        '& div input': {
            padding: "8px 14px"
        }
    },
    searchInputButton: {
        // alignSelf: 'center',
        // background: "linear-gradient(180deg, rgba(255,28,28,1) 0%, rgba(255,28,28,1) 49%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)",
        // fontWeight:"bolder",
        // color:"black"
    }
}));

export default function PokemonsFinder() {
    const classes = useStyles();
    const [pokemonName, setPokemonName] = React.useState("");
    const dispatch = useDispatch()

    const searchPokemons = () => {
        dispatch(getPokemons(pokemonName))
    }

    return (
        <Grid container component="div" spacing={3} >
            <Grid item xs={8}>
                {/* Pokemons Finder */}
                <TextField
                    id="pokemonInput"
                    value={pokemonName}
                    type="text"
                    placeholder="Ingrese el nombre a buscar"
                    variant="outlined"
                    fullWidth
                    onChange={e => setPokemonName(e.target.value)}
                    data-test="search-input"
                    className={classes.pokemonInput}
                />
            </Grid>
            <Grid item xs={3}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={searchPokemons}
                    className={classes.searchInputButton}
                    data-test="search-button">
                    Buscar
      </Button>
            </Grid>
        </Grid>
    )
}
