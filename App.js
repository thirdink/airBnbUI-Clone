import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart-empty" color={tintColor} size={24} />
      )
    }
  },
  Trips:{
    screen:Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Image source={require('./assets/airbnb.png')} 
        style={{height:24,width:24,tintColor: tintColor}}
        />

      )
    }
  },
  Inbox:{
    screen:Inbox,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel:'PROFILE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity:0.5,
      elevation: 5 // works on android but not modifyable
      
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
