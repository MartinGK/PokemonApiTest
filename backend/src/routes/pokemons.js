const Router = require('express')
const pokemonController = require('../controllers/pokemons')

const router = Router();

// router.get('/', pokemonController.getPokemonsInfo);
// router.post('/', pokemonController.getPokemonsList, pokemonController.getPokemonsInfo);
router.get('/:pokeString', pokemonController.getPokemonsList, pokemonController.getPokemonsInfo);

module.exports = router;