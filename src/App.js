import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Alfa Store Ⲁ',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {
              color: '#cd0000',
              fontStyle: 'italic',
              fontSize: 24,
            },
            headerBackTitle: 'Log Out',
            headerTintColor: '#cd0000',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Alfa Store Ⲁ',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {
              color: '#cd0000',
              fontStyle: 'italic',
              fontSize: 24,
            },
            headerBackTitleVisible: false,
            headerTintColor: '#cd0000',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
