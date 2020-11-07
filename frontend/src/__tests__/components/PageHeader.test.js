import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from 'components/PageHeader';
import { findByTestAttr } from 'helpers/testUtils'

const setup = () => {
    return shallow(<PageHeader />);
}

describe("PageHeader rendering", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    afterEach(() => {
        wrapper.unmount();
    })
    test("page-title rendering", () => {
        const component = findByTestAttr(wrapper, "page-title");
        expect(component.exists()).toBe(true);
    })
    test("page-subtitle rendering", () => {
        const component = findByTestAttr(wrapper, "page-subtitle");
        expect(component.exists()).toBe(true);
    })
})
