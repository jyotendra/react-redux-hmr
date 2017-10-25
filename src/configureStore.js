import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './rootReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const storeEnhancers = [];

/* eslint-disable no-underscore-dangle */
if(__DEV__) {
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    storeEnhancers.push(reduxDevTools);
}
/* eslint-enable */

const middlewareEnhancers = applyMiddleware(...middlewares);
storeEnhancers.unshift(middlewareEnhancers);

export default function configureStore(initialSate) {
    const store = createStore(
        rootReducer,
        initialSate,
        compose(...storeEnhancers)
    );

    if(__DEV__) {
        // Hot reload reducers
        if(module.hot) {
            module.hot.accept("./rootReducer", () =>
                store.replaceReducer(require("./rootReducer").default)
            );
        }
    }

    return store;

}