/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
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

    let currentQuote = MainView.getQuote();
    this.state = {
      currentQuote: currentQuote,
      guessed: false,
      streak: 0
    };
    this.state.currentChallenge = this.getChallenge(currentQuote.w);
  }

  static getQuote() {
    return MainView.Quotes[Math.floor(Math.random() * MainView.Quotes.length)];
  }

  guess(index) {
    this.setState({
      guessed: index,
      correctGuess: this.state.currentQuote.w == this.state.currentChallenge[index],
      streak: (this.state.currentQuote.w == this.state.currentChallenge[index] ? this.state.streak + 1 : 0)
    });

    setTimeout(() => {
      let currentQuote = MainView.getQuote();
      this.setState({
        currentQuote: currentQuote,
        guessed: false,
        currentChallenge: this.getChallenge(currentQuote.w)
      });
    }, 2000);
  }

  getChallenge(currentPerson) {
    let otherPerson = currentPerson;
    while (otherPerson == currentPerson) {
      otherPerson = MainView.People[Math.floor(Math.random() * MainView.People.length)];
    }

    return [currentPerson, otherPerson].sort(() => {return Math.random() - 0.5});
  }

  render() {
    if (this.state.guessed === false) {
      return (
        <View style={styles.container}>
          <Text>Streak: {this.state.streak}</Text>
          <View style={styles.options}>
            <TouchableHighlight onPress={() => {this.guess(0)}}>
              <Image style={styles.images} source={MainView.Images[this.state.currentChallenge[0]]} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {this.guess(1)}}>
              <Image style={styles.images} source={MainView.Images[this.state.currentChallenge[1]]} />
            </TouchableHighlight>
          </View>
          <Text style={styles.welcome}>
            "{this.state.currentQuote.q}"
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={(this.state.correctGuess ? styles.correctGuess : styles.wrongGuess)}>
            <Image style={styles.finalguess} source={MainView.Images[this.state.currentChallenge[this.state.guessed]]} />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  correctGuess: {
    backgroundColor: "#00ff00"
  },
  wrongGuess: {
    backgroundColor: "#ff0000"
  },
  options: {
    flexDirection: "row"
  },
  finalguess: {
    width: 200,
    height: 400,
    borderWidth: 5,
    opacity: 0.5
  },
  images: {
    width: 100,
    height: 200,
    margin: 5,
    borderWidth: 2
  },
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
