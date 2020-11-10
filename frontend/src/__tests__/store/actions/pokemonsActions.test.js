import * as actions from 'store/actions/pokemonsActions'
import { POKEMONS_UPDATE } from 'store/actions/types'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);
const store = mockStore({});

describe('pokemonsActions', () => {
    test('create an action which receive the pokemons', () => {
        expect.assertions(2);

        const mJson = [{ name: "pikachu", sprite: "www.image.jpg" }];
        const mResponse = { json: jest.fn().mockResolvedValueOnce(mJson) };

        global.fetch = jest.fn().mockResolvedValueOnce(mResponse);

        const expectedActions = [{ type: POKEMONS_UPDATE, payload: [{ name: "pikachu", sprite: "www.image.jpg" }] }];
        return store.dispatch(actions.getPokemons("pikachu")).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            expect(global.fetch).toBeCalledWith('/pokemon/pikachu', {
                method: "GET"
            });
        });
    })
})
