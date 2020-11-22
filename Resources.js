import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Homepage from './Homepage';

export default function Resources() {
  return (
    
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('./assets/logo.png')} style={{ width: 150, height: 70, resizeMode: 'contain' }} />
        </View>
        <Text style={styles.textHeader}>Resources</Text>
        <View style={styles.section}>
            <Text style={styles.titleText}>A Guide to Motivation:</Text>
            <Text style={styles.bodyText}>One of the biggest challenges in meeting any goal, whether it be related to productivity, waking early, 
            changing a habit, exercising, or just becoming happier, is finding the motivation to stick with it.If you can stick with a goal for long...               -></Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleText}>6 Ways To Reduce Stress and Stop Worrying!</Text>
            <Text style={styles.bodyText}>One of the biggest challenges in meeting any goal, whether it be related to productivity, waking early, 
            changing a habit, exercising, or just becoming happier, is finding the...             -></Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleText}>How to be Happy: Is There a Secret Key to Finding True Happiness?</Text>
            <Text style={styles.bodyText}>Are you happy? It’s kind of a jarring question at first. Because if you are happy then does it mean you are never not happy? 
            Or if there is somewhere you can put yourself to always be...     -></Text>
        </View>
        <View style={styles.section}>
            <Text style={styles.titleText}>10 Things You Can Do Today to Improve Your Life</Text>
            <Text style={styles.bodyText}>You don’t need an overhaul to improve the quality of your life. Just a few steps can help to boost your well-being and make 
            your days more meaningful. And the great part is....               -></Text>
        </View>
    </View>
    
    
  );
}


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        height: 650
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        paddingLeft: 15,
        paddingBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
        color: 'black'
    },
    section: {
        width: 300,
        height: 100,
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        borderRadius: '10px',
        backgroundColor: '#EB6D6D',
        
    },
    titleText: {
        paddingLeft: 10,
        paddingTop: 7,
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff'
    },
    bodyText: {
        padding: 10,
        marginBottom: 12,
        fontSize: 10,
        color: '#fff'
    },


});