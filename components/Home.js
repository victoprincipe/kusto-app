import React, { Component } from 'react';
import { createStore } from 'redux'
import connect from 'react-redux'
import { Button, Image } from 'react-native-elements';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Image source={require("../assets/kusto.png")} style={{ width: 300, height: 300, alignSelf: 'center' }}></Image>
        <View style={{ paddingBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
          <Button title="Sou Filho"
          onPress={() => this.props.navigation.navigate('ChildrenDashboard')}></Button>
        </View>
        <View style={{ paddingBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
          <Button title="Sou Responsável"
          onPress={() => this.props.navigation.navigate('FatherDashboard')}></Button>
        </View>        
      </View>
    );
  }
}

export default Home;