import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pokemonName: {
        textTransform: "capitalize"
    }
}));


export default function PokemonsResult() {
    const pokemons = useSelector(state => state.pokemons.result)
    const classes = useStyles();

    // React.useEffect(() => {
    //     console.log("pokemons")
    //     console.log(pokemons)
    // }, [pokemons])

    return (
        <Grid container component="div" spacing={3} xs>
            <Grid item xs={12} data-test="search-result-container" component="div">
                {/* TODO: SEARCH RESULT */}
                <Typography variant="h3" component="h2" data-test="container-title">
                    Resultados de la Busqueda
  </Typography>
                <Grid item xs={12} component="div" data-test="result-container">
                    {/* TESTEAR QUE EXISTE O NO EL POKEMON-LIST */}
                    {pokemons && pokemons.length ?
                        <List data-test="pokemon-list">

                            {pokemons.map(poke => {
                                return <>
                                    <ListItem alignItems="center">
                                        <ListItemAvatar>
                                            <img src={poke.sprites.front_default} alt={poke.name} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            className={classes.pokemonName}
                                            primary={poke.name}
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </>
                            })}
                        </List>
                        : null}
                </Grid>
            </Grid>
        </Grid>
    )
}
