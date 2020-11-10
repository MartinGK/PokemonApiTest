const fetch = require('node-fetch');

const getPokemonsInfo = async (req, res, next) => {
    const posiblePokemons = req.pokemonsList.filter(poke =>
        poke.name.toLowerCase().includes(req.params.pokeString.toLowerCase())
    )
    Promise.all(posiblePokemons.map(poke => fetch(poke.url, {
        method: 'GET'
    }).then(res => res.json()))).then(response => {
        const pokemons = response.map(poke => ({
            name: poke.name,
            sprite: Math.random() < 0.1 ? poke.sprites.front_shiny : poke.sprites.front_default
        }))
        res.status(200).json(pokemons)
    }).catch(err => {
        console.warn(err)
        res.status(400).json({
            message: 'error',
            error: err.toString()
        })
    })
}

const getPokemonsList = async (req, res, next) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=-1`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            req.pokemonsList = data.results;
            next();
        }).catch(err => {
            console.warn(err)
            res.status(400).json({
                message: 'error',
                error: err.toString()
            })
        })
}

module.exports = {
    getPokemonsInfo,
    getPokemonsList
}