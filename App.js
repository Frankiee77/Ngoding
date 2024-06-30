import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'; 
import About from './components/About'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kontak" component={Home} />
        <Stack.Screen name="Detail Informasi" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
