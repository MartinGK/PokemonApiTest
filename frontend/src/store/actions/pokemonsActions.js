import { POKEMONS_UPDATE, ERROR} from "store/actions/types";

export const getPokemons = (name) => dispatch => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,{
        method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: POKEMONS_UPDATE,
                payload: [data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data,data]
            })
        }).catch(error => {
            dispatch({
                type: ERROR,
                payload: error.toString()
            })
        })
}
