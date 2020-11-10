import React from 'react';
import { mount } from 'enzyme';
import PokemonsFinder from 'components/PokemonsFinder';
import { findByTestAttr } from 'helpers/testUtils'
import createMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { getPokemons } from 'store/actions/pokemonsActions';

// now we have access to the store instance
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);
const store = mockStore({});

jest.mock('store/actions/pokemonsActions', () => ({
    getPokemons: jest.fn().mockImplementation(() => 'pikachu')
}))

const setup = () => {
    const component = mount(<Provider store={store}>
        <PokemonsFinder />
    </Provider>);
    return component;
}

describe("PokemonsFinder rendering", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ pokemons: [] });
        const globalStore = wrapper.find(Provider).prop("store");
        jest.fn().mockImplementation(action => {
            return globalStore.dispatch(action)
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
        const globalStore = wrapper.find(Provider).prop("store");
        jest.fn().mockImplementation(action => {
            return globalStore.dispatch(action)
        });
    })

    afterEach(() => {
        wrapper.unmount();
    })

    test("search-input functionality", () => {
        const input = findByTestAttr(wrapper, "search-input");
        input.simulate("change", {
            preventDefault() { },
            target: { value: "pikachu" }
        })
        wrapper.update();
        const button = findByTestAttr(wrapper, "search-button", "button");
        button.simulate("click");
        expect(getPokemons).toHaveBeenCalledWith("pikachu");
    })
})

