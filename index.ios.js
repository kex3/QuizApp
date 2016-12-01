/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainView from './shared/MainView';

export default class quizApp extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

AppRegistry.registerComponent('quizApp', () => quizApp);
