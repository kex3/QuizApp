/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Quotes from './quotes';

export default class MainView extends Component {
  constructor() {
    super();
    MainView.Quotes = Quotes;
    MainView.Images = {
      AndersRingqvist: require('../img/AndersRingqvist.jpg'),
      JoelSannerstedt: require('../img/JoelSannerstedt.jpg'),
      JustinNel: require('../img/JustinNel.jpg'),
      MikaelBrassman: require('../img/MikaelBrassman.jpg'),
      StellanRunander: require('../img/StellanRunander.jpg'),
      VictoriaHolmqvist: require('../img/VictoriaHolmqvist.jpg'),
      NejcPalir: require('../img/NejcPalir.jpg')
    };
    MainView.People = [...new Set(MainView.Quotes.map(item => item.w))];
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit shared/MainView.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
