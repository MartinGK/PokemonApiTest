import React from 'react';
import { mount } from 'enzyme';
import PokemonsFinder from 'components/PokemonsFinder';
import { findByTestAttr, storeFactory } from 'helpers/testUtils'
import { Provider } from 'react-redux';
import { getPokemons } from 'store/actions/pokemonsActions';

// now we have access to the store instance
let store
const setup = (initialState = {}) => {
     store = storeFactory(initialState);
    store.dispatch = jest.fn(cb => {
        return cb()
    })

    const component = mount(<Provider store={store}><PokemonsFinder /></Provider>);
    return component;
}


describe("PokemonsFinder rendering", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
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
        wrapper = setup();
    })

    afterEach(() => {
        wrapper.unmount();
    })
    test("search-input functionality", () => {
        const button = findByTestAttr(wrapper, "search-button", "button");
        button.simulate("click");
        // expect(true).toBe(true);
        expect(store.dispatch(getPokemons("pikachu"))).toHaveBeenCalled(1);

    })
})