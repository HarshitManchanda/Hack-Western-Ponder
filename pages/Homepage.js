//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

export default function Homepage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={{ width: 150, height: 70, resizeMode: 'contain' }} />
            </View>
            <Text style={styles.textHeader}>What would you like to do?</Text>
            <TouchableHighlight style={styles.section1} onPress={() => navigation.navigate('Gratitude', {})}>
                <Text style={styles.sectionText}>Gratitude Journal</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.section2} onPress={() => navigation.navigate('Goals', {})}>
                <Text style={styles.sectionText}>Goals</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.section3} onPress={() => navigation.navigate('Resources', {})}>
                <Text style={styles.sectionText}>Resources</Text>
            </TouchableHighlight>
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
        borderRadius: 10,
        backgroundColor: '#EB6D6D',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    section2: {
        width: 260,
        height: 100,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#f79f79',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    section3: {
        width: 260,
        height: 100,
        margin: 10,
        borderRadius: 10,
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
        paddingTop: 21,
        fontSize: 22,
        fontWeight: "bold",
        color: '#7197AC',
        textAlign: 'center',
        justifyContent: 'center'
    }
    
  });