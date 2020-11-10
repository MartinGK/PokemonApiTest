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
 * Return node(s) with given data-test attribute.
 * @param {shallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @param {string} comp - Component if you want to be more precise
 * @return {shallowWrapper}
 */
export const findByTestAttr = (wrapper, val, comp="") => {
    return wrapper.find(`${comp}[data-test="${val}"]`);
}
