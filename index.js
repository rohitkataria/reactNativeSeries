import {MenuProvider} from 'react-native-popup-menu';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Root = () => (
  <MenuProvider>
    <App />
  </MenuProvider>
);

AppRegistry.registerComponent(appName, () => Root);
