import React from 'react';
import { mount } from 'enzyme';
import PokemonsResult from 'components/PokemonsResult';
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from 'helpers/testUtils'

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = mount(<Provider store={store}>
        <PokemonsResult />
    </Provider>);
    return wrapper;
}

describe("PokemonsResult rendering", () => {
    describe("without pokemons", () => {
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
        test("pokemon-list not rendering", () => {
            const component = findByTestAttr(wrapper, "pokemon-list");
            expect(component.exists()).toBe(false);
        })
    })
    describe("with pokemons", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({
                pokemons: {
                    error: '',
                    result: [
                        {
                            name: 'pikachu',
                            sprite: null
                        },
                        {
                            name: 'pikachu2',
                            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                        }]
                }
            });
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
        test("pokemon-list rendering", () => {
            const component = findByTestAttr(wrapper, "pokemon-list");
            expect(component.exists()).toBe(true);
        })
        test("pokemon-item rendering", () => {
            const components = findByTestAttr(wrapper, "pokemon-item", "li");
            expect(components.length).toBe(2);
        })
    })
})
