import React from 'react';
import { shallow } from 'enzyme';
import PageFooter from 'components/PageFooter';
import { findByTestAttr } from 'helpers/testUtils'

const setup = () => {
    return shallow(<PageFooter />);
}

describe("PageFooter rendering", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    afterEach(() => {
        wrapper.unmount();
    })

    test("divider rendering", () => {
        const component = findByTestAttr(wrapper, "divider");
        expect(component.exists()).toBe(true);
    })
    test("copyright rendering", () => {
        const component = findByTestAttr(wrapper, "copyright");
        expect(component.exists()).toBe(true);
    })
    test("repo-button rendering", () => {
        const component = findByTestAttr(wrapper, "repo-button");
        expect(component.exists()).toBe(true);
    })
})