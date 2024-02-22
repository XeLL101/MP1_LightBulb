import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: 'black',
    color: 'lightColor',
    bulbImage: require('./assets/bulbOff.jpg'),
    switchLabel: 'OFF'
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#fbc513' : '#000000';
    const color = switchValue ? 'darkColor' : 'lightColor';
    const bulbImage = switchValue ? require('./assets/bulbOn.jpg') : require('./assets/bulbOff.jpg');
    const switchLabel = switchValue ? 'ON' : 'OFF';
    this.setState({ switchValue, backgroundColor, color, bulbImage, switchLabel });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
        <Text style={[styles.switchText, styles[this.state.color]]}>{this.state.switchLabel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  switchText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  lightColor: {
    color: 'white',
  },
  darkColor: {
    color: 'black',
  },
});
