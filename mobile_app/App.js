import React, { useState }from 'react';
import Routes from './client/routes'
import {Provider} from 'react-redux'
import store from './client/store'
import {NativeRouter} from 'react-router-native'
import {ToastProvider} from 'react-native-fast-toast'

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <ToastProvider>
          <Routes/>
        </ToastProvider>
      </NativeRouter>
    </Provider>

  );
}
