import React, { useState }from 'react';
import Routes from './client/routes'
import {Provider} from 'react-redux'
import store from './client/store'
import {NativeRouter} from 'react-router-native'

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes/>
      </NativeRouter>
      {/* <View style={styles.container}>
        <WelcomeScreen />
      </View> */}
    </Provider>

  );
}
