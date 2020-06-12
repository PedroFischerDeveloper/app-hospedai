import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Dashboard from './Dashboard';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Forgot" component={Forgot} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
