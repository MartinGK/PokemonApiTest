import React from 'react';
import { shallow } from 'enzyme';
import App from 'App';
import {findByTestAttr} from 'helpers/testUtils'

const setup = () =>{
    return shallow(<App />);
}

describe("App rendering",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup();
    })

    afterEach(()=>{
        wrapper.unmount();
    })

    test("page-title rendering",()=>{
        const component = findByTestAttr(wrapper, "page-title");
        expect(component.exists()).toBe(true);
    })
    test("page-subtitle rendering",()=>{
        const component = findByTestAttr(wrapper, "page-subtitle");
        expect(component.exists()).toBe(true);
    })
    test("search-input rendering",()=>{
        const component = findByTestAttr(wrapper, "search-input");
        expect(component.exists()).toBe(true);
    })
    test("search-button rendering",()=>{
        const component = findByTestAttr(wrapper, "search-button");
        expect(component.exists()).toBe(true);
    })
    test("search-result-container rendering",()=>{
        const component = findByTestAttr(wrapper, "search-result-container");
        expect(component.exists()).toBe(true);
    })
    test("page-footer rendering",()=>{
        const component = findByTestAttr(wrapper, "page-footer");
        expect(component.exists()).toBe(true);
    })
})