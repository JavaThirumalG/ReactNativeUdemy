/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {  
  View
} from 'react-native';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';


 const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
          <Header headerText="Tach Stack"/>
          <LibraryList />
        </View>
      </Provider>
    );
};

export default App;

