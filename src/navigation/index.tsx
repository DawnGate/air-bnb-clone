import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen constant
import {SCREEN} from './constant';

// pages
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={SCREEN.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
