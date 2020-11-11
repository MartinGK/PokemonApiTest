import React from 'react';
import PokemonsFinder from 'components/PokemonsFinder';
import { findByTestAttr, storeFactory } from 'helpers/testUtils'
import { Provider } from 'react-redux';
import { getPokemons } from 'store/actions/pokemonsActions';
import { createMount } from '@material-ui/core/test-utils';

jest.mock("react-redux", () => {
    return {
        ...jest.requireActual("react-redux"),
        useDispatch: () => jest.fn(),
    };
});
jest.mock("store/actions/pokemonsActions", () => {
    return {
        getPokemons: jest.fn(),
    };
});

let store;
let mount;

const setup = (initialState = {}) => {
    mount = createMount();
    store = storeFactory(initialState);
    const wrapper = mount(<Provider store={store}>
        <PokemonsFinder />
    </Provider>);
    return wrapper;
}


describe("PokemonsFinder rendering", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({
            pokemons: {
                error: '',
                result: []
            }
        });
    })

    afterEach(() => {
        wrapper.unmount();
    })

    test("search-input rendering", () => {
        const component = findByTestAttr(wrapper, "search-input");
        expect(component.exists()).toBe(true);
    })
    test("search-button rendering", () => {
        const component = findByTestAttr(wrapper, "search-button");
        expect(component.exists()).toBe(true);
    })
})

describe("PokemonsFinder functionality", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ pokemons: [] });
    })

    afterEach(() => {
        wrapper.unmount();
    })

    describe("search-input functionality", () => {
        test("search-input functionality with button", () => {
            const input = findByTestAttr(wrapper, "search-input", "input").at(0);
            input.simulate("change", {
                target: { value: "pikachu" }
            })
            const button = findByTestAttr(wrapper, "search-button", "button");
            button.simulate("click");
            expect(getPokemons).toHaveBeenCalledWith("pikachu");
        })
    })
})

