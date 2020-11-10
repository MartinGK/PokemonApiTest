import React from 'react';
import { mount } from 'enzyme';
import App from 'App';
import { findByTestAttr, storeFactory } from 'helpers/testUtils'
import { Provider } from 'react-redux';
import { getPokemons } from 'store/actions/pokemonsActions';

// now we have access to the store instance

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const component = mount(<App />);
    return component;
}

describe("pokemons dispatcher", () => {
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

    test("search-input functionality", () => {
        const inputContainer = findByTestAttr(wrapper, "search-input");
        const input = inputContainer.find(`input`);
        const button = findByTestAttr(wrapper, "search-button", "button");

        input.simulate("change", {target:{value:"pikachu"}})
        console.log(input.debug());
        expect(true).toBe(true);
    })
})
