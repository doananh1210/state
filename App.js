import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          onClick={this.handleButtonClick}
          colorChange="#008000" 
        />
        <ButtonComponent
          backgroundColor="blue"
          onClick={this.handleButtonClick}
          colorChange="#0000FF" 
        />
        <ButtonComponent
          backgroundColor="brown"
          onClick={this.handleButtonClick}
          colorChange="#A52A2A" 
        />
        <ButtonComponent
          backgroundColor="yellow"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00" 
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF0000" 
        />
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#000000" 
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange } = this.props;
    const textColor = backgroundColor === 'yellow' ? 'black' : 'white';
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {backgroundColor.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%', 
    paddingVertical: 18,
    marginVertical: 18,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
