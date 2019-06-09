import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Tasks from './components/Tasks';
import CardForm from './components/CardForm';
import Home from './components/Home';


const AppNavigator = createSwitchNavigator({
  HomeScreen: Home,
  FatherDashboard: {
    screen: createStackNavigator({
      Dashboard: Tasks,
      TaskForm: CardForm
    })
  },
  ChildrenDashboard: CardForm
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