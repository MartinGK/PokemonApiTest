import React from 'react';
import { shallow } from 'enzyme';
import PokemonsFinder from 'components/PokemonsFinder';
import { findByTestAttr, storeFactory } from 'helpers/testUtils'
import {Provider} from 'react-redux'

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    return shallow(<Provider store={store} >
        <PokemonsFinder store={store} />
    </Provider>).dive().dive();
}

describe("PokemonsFinder rendering", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    afterEach(() => {
        // wrapper.unmount();
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