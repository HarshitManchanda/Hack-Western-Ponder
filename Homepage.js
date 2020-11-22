//import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Homepage() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('./assets/logo.png')} style={{ width: 150, height: 70, resizeMode: 'contain' }} />
            </View>
            <Text style={styles.textHeader}>What would you like to do?</Text>
            <View style={styles.section1}>
                <Text style={styles.sectionText}>Gratitude Journal -></Text>
            </View>
            <View style={styles.section2}>
                <Text style={styles.sectionText}>Goals -></Text>
            </View>
            <View style={styles.section3}>
                <Text style={styles.sectionText}>Resources -></Text>
            </View>
            <View>
                <Text style={styles.quote}>"Do something today that your future self will thank you for."</Text>
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 15,
      height: 500
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    section1: {
        width: 260,
        height: 100,
        margin: 10,
        borderRadius: '10px',
        backgroundColor: '#EB6D6D',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    section2: {
        width: 260,
        height: 100,
        margin: 10,
        borderRadius: '10px',
        backgroundColor: '#f79f79',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    section3: {
        width: 260,
        height: 100,
        margin: 10,
        borderRadius: '10px',
        backgroundColor: '#f7d08a',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sectionText: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff'
    },
    textHeader: {
        paddingLeft: 15,
        paddingBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
        color: 'black'
    },
    quote: {
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 22,
        fontWeight: "bold",
        color: '#7197AC',
        textAlign: 'center',
        justifyContent: 'center'
    }
    
  });