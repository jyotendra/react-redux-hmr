import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// Create redux store
let store = createStore(rootReducer);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}


render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { 
    console.log('Updating App..................');  
    render(App) })
}