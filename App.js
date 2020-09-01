import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Q1 from './screens/Q1'
import Q2 from './screens/Q2'
import Q3 from './screens/Q3'
import Q4 from './screens/Q4'
import Q5 from './screens/Q5'
import Thanks from './screens/Thanks'

export default class App extends Component{
 
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  )
}
}
var switchNavigator = createSwitchNavigator({
Q1:{screen:Q1},
Q2:{screen:Q2},
Q3:{screen:Q3},
Q4:{screen:Q4},
Q5:{screen:Q5},
Thanks:{screen:Thanks}
})

const AppContainer = createAppContainer(switchNavigator)
