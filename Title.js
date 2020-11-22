import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';

export default function Title({ navigation }) {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/background.png')} style={styles.image}>
        <View style={styles.top_section}>
        <Text style={{fontSize: 18}}>Hello,</Text>
        <Text style={{fontSize: 18}}>Welcome to Ponder</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.middle_section}>
        <Image source={require('./assets/logo.png')} style={{ width: 250, height: 80, resizeMode: 'contain' }} />
        <Text style={{fontSize: 18}}>Your new personal self-care companion</Text>
        <TouchableHighlight underlayColor="#FFF8F8" onPress={() => navigation.navigate('Quote', {})}>
            <View style={styles.button}>
            <Text style={{fontSize: 18}}>Get Started</Text>
            </View>
        </TouchableHighlight>
        </View>
        <View style={styles.bottom_section}>
        <Text style={{fontSize: 18}}>Start your journey</Text>
        <Text style={{fontSize: 18}}>to explore your inner self!</Text>
        </View>
        </ImageBackground>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#5A57EF',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    button: {
      backgroundColor: "#FC545E",
      padding: 15,
      margin: 20,
      width: 150,
      alignItems: 'center',
      borderRadius: 10
    },
    top_section: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 100,
      marginLeft: 30,
      marginBottom: 50
    },
    middle_section: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    bottom_section: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: 30,
      marginBottom: 100,
    }
  });
  