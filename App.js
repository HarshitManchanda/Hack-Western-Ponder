import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Title from './pages/Title.js';
import DailyQuote from './pages/DailyQuote.js';
import Homepage from './pages/Homepage.js';
import Goals from './pages/Goals.js';
import GratitudeJournal from './pages/GratitudeJournal.js'
import GratitudeJournalExpanded from './pages/GratitudeJournalExpanded.js'
import Resources from './pages/Resources.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Title" component={Title} options={{ headerShown: null }}/>
        <Stack.Screen name="Quote" component={DailyQuote} options={{ headerShown: null }}/>
        <Stack.Screen name="Home" component={Homepage} options={{ headerShown: null }}/>
        <Stack.Screen name="Goals" component={Goals} options={{ headerShown: null }}/>
        <Stack.Screen name="Gratitude" component={GratitudeJournal} options={{ headerShown: null }} />
        <Stack.Screen name="GratitudeExpanded" component={GratitudeJournalExpanded} options={{ headerShown: null }} />
        <Stack.Screen name="Resources" component={Resources} options={{ headerShown: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}