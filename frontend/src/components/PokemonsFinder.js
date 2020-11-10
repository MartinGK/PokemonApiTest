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
}));

export default function PokemonsFinder() {
    const classes = useStyles();
    const [pokemonName, setPokemonName] = React.useState("");
    const dispatch = useDispatch()

    const searchPokemons = (e) => {
        e.preventDefault();
        dispatch(getPokemons(pokemonName))
    }

    return (
        <Grid container component="form" spacing={3} >
            <Grid item xs={8}>
                <TextField
                    inputProps={{
                        "data-test": "search-input"
                    }}
                    // onKeyUp={handleKeyPress}
                    // data-test="search-input"
                    id="pokemonInput"
                    value={pokemonName}
                    type="text"
                    name="pokemonInput"
                    placeholder="Ingrese el nombre a buscar"
                    variant="outlined"
                    fullWidth
                    onChange={e => setPokemonName(e.target.value)}
                    className={classes.pokemonInput}
                />
            </Grid>
            <Grid item xs={3}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    onClick={searchPokemons}
                    className={classes.searchInputButton}
                    data-test="search-button">
                    Buscar
      </Button>
            </Grid>
        </Grid>
    )
}
