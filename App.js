import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from './Title.js';
import Homepage from './Homepage.js';
import Goals from './Goals.js';
import GratitudeJournal from './GratitudeJournal.js'
import GratitudeJournalExpanded from './GratitudeJournalExpanded.js'
//import Resources from './Resources.js';          <Stack.Screen name="Resources" component={Resources} options={{ headerShown: null }} />

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Title" component={Title} options={{ headerShown: null }}/>
        <Stack.Screen name="Home" component={Homepage} options={{ headerShown: null }}/>
        <Stack.Screen name="Goals" component={Goals} options={{ headerShown: null }}/>
        <Stack.Screen name="Gratitude" component={GratitudeJournal} options={{ headerShown: null }} />
        <Stack.Screen name="GratitudeExpanded" component={GratitudeJournalExpanded} options={{ headerShown: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}