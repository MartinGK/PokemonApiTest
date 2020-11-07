import { POKEMONS_UPDATE, ERROR} from "store/actions/types";

export const getPokemons = (name) => dispatch => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: POKEMONS_UPDATE,
                payload: [data]
            })
        }).catch(error => {
            dispatch({
                type: ERROR,
                payload: error.toString()
            })
        })
}
