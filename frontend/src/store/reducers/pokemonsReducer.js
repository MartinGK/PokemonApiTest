import { POKEMONS_UPDATE, ERROR } from "store/actions/types";

const initialState = {
    error: "",
    result: [],
};

function pokemonsReducer (state = initialState, action) {
    switch (action.type) {
        case POKEMONS_UPDATE:
            return {
                ...state,
                result: action.payload,
                loading: false
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default pokemonsReducer;