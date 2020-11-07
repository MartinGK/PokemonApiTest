import React from 'react';
import { shallow } from 'enzyme';
import PokemonsResult from 'components/PokemonsResult';
import { findByTestAttr, storeFactory } from 'helpers/testUtils'

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<PokemonsResult store={store}/>).dive().dive();
    console.log(wrapper.debug())
    console.log(wrapper.dive())
    return wrapper;
}

describe("PokemonsResult rendering", () => {
    let wrapper;
    describe("without pokemons", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup();
        })

        afterEach(() => {
            wrapper.unmount();
        })

        test("search-result-container rendering", () => {
            const component = findByTestAttr(wrapper, "search-result-container");
            expect(component.exists()).toBe(true);
        })
        test("container-title rendering", () => {
            const component = findByTestAttr(wrapper, "container-title");
            expect(component.exists()).toBe(true);
        })
        test("result-container rendering", () => {
            const component = findByTestAttr(wrapper, "result-container");
            expect(component.exists()).toBe(true);
        })
    })
    describe("with pokemons", () => {

    })


})
