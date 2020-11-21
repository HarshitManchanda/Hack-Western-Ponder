import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
      <Text style={{fontSize: 18}}>Hello,</Text>
      <Text style={{fontSize: 18}}>Welcome to Ponder</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.middle_section}>
        <Image source={require('./assets/logo.png')} style={{ width: 200, height: 70, resizeMode: 'contain' }} />
        <Text style={{fontSize: 18}}>Your new personal self-care companion</Text>
      </View>
      <View style={styles.bottom_section}>
        <Text style={{fontSize: 18}}>Start your journey</Text>
        <Text style={{fontSize: 18}}>to explore your inner self!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5A57EF',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  top_section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 120,
    marginLeft: 30,
    // marginBottom: -100
  },
  middle_section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 100,
  },
  bottom_section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 100,
  }
});
