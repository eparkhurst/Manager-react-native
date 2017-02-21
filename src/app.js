import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Sup Homie!?!?!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
