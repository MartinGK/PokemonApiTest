import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pokemonName: {
        textTransform: "capitalize"
    },
    resultList: {
        overflowY: 'scroll',
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        padding: 0
        // maxHeight: '22rem'
    },
    searchResultContainer: {
        display: "grid",
        gridTemplateRows: "1fr 8fr",
        gridGap: "10px"
    },
    listItem: {
        padding: "20px 10px",
        width: "90%"
    },
    title: {
        fontSize: "1.5rem"
    }
}));


export default function PokemonsResult() {
    const pokemons = useSelector(state => state.pokemons.result)
    const classes = useStyles();

    return (
        <Grid container component="div" spacing={3} data-test="search-result-container" className={classes.searchResultContainer}>
            <Typography variant="h3" component="h2" data-test="container-title" className={classes.title}>
                Resultados de la Búsqueda
  </Typography>
            {/* TESTEAR QUE EXISTE O NO EL POKEMON-LIST */}
            <Box style={{ position: "relative", width: "100%" }} data-test="result-container">
                {pokemons && pokemons.length ?
                    <List data-test="pokemon-list" className={classes.resultList}>

                        {pokemons.map(poke => {
                            return <>
                                <ListItem alignItems="center" className={classes.listItem}>
                                    <ListItemAvatar style={poke.sprite ? {} : { padding: "20px" } }>
                                        <img src={poke.sprite ? poke.sprite : '/pokeball.svg'} alt={poke.name} title={poke.name} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        className={classes.pokemonName}
                                        primary={poke.name}
                                    />
                                </ListItem>
                            </>
                        })}
                    </List>
                    : null}

            </Box>
        </Grid>
    )
}
