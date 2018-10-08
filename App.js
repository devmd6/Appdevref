import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import LoginScreen, { WaitingLoginScreen } from './src/LoginScreen';
import DailyQuestionScreen from './src/DailyQuestion';

export default class App extends React.Component {
  render() {
    return (
      <RootStacks />
    );
  }
}

const AppDrawer = createDrawerNavigator({
  Home: HomeScreen
});

const AppStack = createStackNavigator(
  {
    Home: {
      screen: AppDrawer,
      navigationOptions: { header: null }
    },
    DailyQuestion: {
      screen: DailyQuestionScreen,
      navigationOptions: {
        title: 'Daily question'
      }
    }
  },
  {
    initialRouteName: 'DailyQuestion'
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: { header: null }
    },
    LoggingIn: {
      screen: WaitingLoginScreen,
      navigationOptions: { header: null }
    }
  },
  { initialRouteName: 'Login' }
);

const RootStacks = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'App'
  }
);
