/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import './config/ReactotronConfig';
import store from './store';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';
import colors from './styles/colors';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            cardStyle: {
              backgroundColor: colors.dark,
            },
            header: navigation => <Header {...navigation} />,
            headerShown: true,
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
