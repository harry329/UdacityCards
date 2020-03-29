/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Landing from './src/components/Landing';
import reducer from './src/reducer'
import middleware from './src/middleware'
import { createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer, middleware)


const App: () => React$Node = () => {
  return (
      <Provider store={store}>
          <Landing/>
      </Provider>
  );
};


export default App;
