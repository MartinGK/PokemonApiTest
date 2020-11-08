import checkPropTypes from "check-prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from 'store/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @return {Store} - Reducx store
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducers, initialState);
}

/**
 * mocks useSelector function
 */
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn,
    useDispatch: jest.fn
}))

/**
 * replace the useSelector callback.
 * @param {object} store - store object
 * @return {object} store - store object
 */
export const replaceUseSelector = (store) => {
    useSelector.mockImplementation((callback) => {
        return callback(store);
    })
}

/**
 * clean the useSelector mock
 */
export const cleanUseSelector = () => {
    useSelector.mockClear();
}

/**
 * Return node(s) with given data-test attribute.
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @return {shallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Throw error if conforming props do not pass propTypes validation.
 * @param {React.Component} component - Component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */
export const checkprops = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        "props",
        component.name
    );
    expect(propError).toBeUndefined()
}