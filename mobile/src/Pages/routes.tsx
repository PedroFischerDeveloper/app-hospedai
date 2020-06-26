import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {MainProvider} from '../Pages/Contexts/mainContext';

import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import Forgot from './Forgot';
import Dashboard from './Dashboard';
import Description from './Description';
import Profile from './Profile';
import Houses from './House';
import Filter from './Filter';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Casas') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Filtros') {
            iconName = focused ? 'build' : 'build';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#73224f',
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Filtros" component={Filter} />
      <Tab.Screen name="Casas" component={Houses} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <MainProvider>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Inicio" component={Home} />
          <AppStack.Screen name="Auth" component={Auth} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="Forgot" component={Forgot} />
          <AppStack.Screen name="Detalhes" component={Description} />
          <AppStack.Screen name="Home" component={TabsMenu} />
        </AppStack.Navigator>
      </MainProvider>
    </NavigationContainer>
  );
};

export default Routes;
