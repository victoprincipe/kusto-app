import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { Button, Card } from 'react-native-elements';
import Tasks from './components/Tasks';
import CardForm from './components/CardForm';
import ChildrenDashboard from './components/ChildDashboard'
import Home from './components/Home';


const AppNavigator = createSwitchNavigator({
  HomeScreen: Home,
  FatherDashboard: {
    screen: createStackNavigator({
      Dashboard: {
        screen: Tasks,
        navigationOptions: ( { navigation } ) => (
          {
              title: 'KUSTO',
              headerStyle: {
                  display: 'flex',
                  backgroundColor: '#6b52ae'
              },
              headerTintColor: 'white',
              headerTitleStyle: { 
                  textAlign: 'center', 
                  flex:1 
              },
              headerRight: (
                  <View>
                      <Button title="SAIR"
                      onPress={() => navigation.navigate('HomeScreen')}></Button>
                  </View>
              )
          }
        )
      },
      TaskForm: {
        screen: CardForm,
      } 
    })
  },
  ChildrenDashboard: {
    screen: createStackNavigator({
      Dashboard: {
        screen: ChildrenDashboard,
        navigationOptions: ( { navigation } ) => (
          {
              title: 'KUSTO',
              headerStyle: {
                  display: 'flex',
                  backgroundColor: '#6b52ae'
              },
              headerTintColor: 'white',
              headerTitleStyle: { 
                  textAlign: 'center', 
                  flex:1 
              },
              headerRight: (
                  <View>
                      <Button title="SAIR"
                      onPress={() => navigation.navigate('HomeScreen')}></Button>
                  </View>
              )
          }
        )
      }
    })
  }
});

const AppContainer = createAppContainer(AppNavigator)

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

let appStore = createStore(todos);

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App;