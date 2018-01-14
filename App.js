import React from 'react';
import { View } from 'react-native';
import CryptoContainer  from './src/containers/CryptoContainer';
import { Provider } from 'react-redux';
import Store from './src/Store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}


