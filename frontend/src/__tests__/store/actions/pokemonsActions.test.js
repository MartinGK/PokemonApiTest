import { getPokemons } from 'store/actions/pokemonsActions'
import { POKEMONS_UPDATE, ERROR } from 'store/actions/types'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('pokemonsActions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    test('create an action which receive the pokemons', () => {

        fetchMock.getOnce('https://pokeapi.co/api/v2/pokemon/pikachu', {
            body:  { name: "pikachu", img: "image.jpg" },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = { type: POKEMONS_UPDATE, payload: [{ name: "pikachu", img: "image.jpg" }] }
        
        const store = mockStore({ pokemons: [] })
        console.log("store")
        console.log(store)

        return store.dispatch(getPokemons("pikachu")).then((res) => {
            console.log(res);
            console.log(store.getActions());
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})