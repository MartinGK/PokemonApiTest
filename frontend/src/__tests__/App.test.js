import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';
import { findByTestAttr } from 'helpers/testUtils'

const setup = () => {
    return shallow(<App />);
}

describe("App rendering", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    afterEach(() => {
        wrapper.unmount();
    })

    test("page-header rendering", () => {
        const component = findByTestAttr(wrapper, "page-header");
        expect(component.exists()).toBe(true);
    })
    test("pokemons-finder rendering", () => {
        const component = findByTestAttr(wrapper, "pokemons-finder");
        expect(component.exists()).toBe(true);
    })
    test("pokemons-result rendering", () => {
        const component = findByTestAttr(wrapper, "pokemons-result");
        expect(component.exists()).toBe(true);
    })
    test("page-footer rendering", () => {
        const component = findByTestAttr(wrapper, "page-footer");
        expect(component.exists()).toBe(true);
    })
})