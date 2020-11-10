import pokemonsReducer from 'store/reducers/pokemonsReducer';
import * as types from 'store/actions/types';

describe('pokemonsReducer', () => {
    it('should return the initial state', () => {
        expect(pokemonsReducer(undefined, {})).toEqual({
            error: "",
            result: [],
        })
    })

    it('should handle POKEMONS_UPDATE', () => {
        expect(
            pokemonsReducer([], {
                type: types.POKEMONS_UPDATE,
                payload: [{ name: "pikachu", sprite: "www.image.jpg" }]
            })
        ).toEqual(
            {
                result: [{ name: "pikachu", sprite: "www.image.jpg" }],
                loading: false
            }
        )

        expect(
            pokemonsReducer(
                {
                    result: [{ name: "pikachu", sprite: "www.image.jpg" }],
                    loading: false
                },
                {
                    type: types.POKEMONS_UPDATE,
                    payload: [{ name: "charmander", sprite: "www.image.jpg" }]
                }
            )
        ).toEqual(
            {
                result: [{ name: "charmander", sprite: "www.image.jpg" }],
                loading: false
            },
            {
                type: types.POKEMONS_UPDATE,
                payload: [{ name: "charmander", sprite: "www.image.jpg" }]
            }
        )
    })
})