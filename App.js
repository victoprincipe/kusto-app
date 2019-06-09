import React, { Component } from 'react';
import { createStore } from 'redux'
import connect from 'react-redux'
import { Button, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tasks from './components/Tasks';
import CardForm from "./components/Card";

class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Image source={require("./assets/kusto.png")} style={{ width: 300, height: 300, alignSelf: 'center' }}></Image>
        <Button title="Sou Filho"></Button>
        <Button title="Sou Responsável"></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: Tasks
  }
});

export default createAppContainer(AppNavigator);