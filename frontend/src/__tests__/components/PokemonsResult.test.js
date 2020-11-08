import React from 'react';
import { shallow } from 'enzyme';
import PokemonsResult from 'components/PokemonsResult';
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from 'helpers/testUtils'

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Provider store={store}>
        <PokemonsResult store={store} />
    </Provider>).dive().dive();
    console.log(wrapper.debug())
    console.log(wrapper.dive())
    return wrapper;
}

describe("PokemonsResult rendering", () => {
    describe("without pokemons", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup({
                pokemons: {
                    error: '',
                    result: [
                        {
                            name: 'pikachu',
                            sprites: {
                                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                            },
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
    })
    describe("with pokemons", () => {

    })


})
