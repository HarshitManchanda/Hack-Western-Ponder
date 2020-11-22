import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function DailyQuote({ navigation }) {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home', {})}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Image source={require('../assets/sun.png')} style={styles.image}/>
            <Text style={styles.header_text}>Morning, Sunshine!</Text>
          </View>
          <View style={styles.section}>
            <Text style={{fontSize: 18}}>Today we are going to have an awesome day</Text>
            <Text style={{fontSize: 18}}>filled with positive experiences!</Text>
          </View>
          <View style={styles.section}>
            <Text style={{fontSize: 18}}>Throughout the day, keep in mind how</Text>
            <Text style={{fontSize: 18}}>you could make today 5% better than yesterday</Text>
          </View>
          <View style={styles.section}>
            <Text style={{fontSize: 24, fontWeight: "600"}}>"With the new day comes new</Text>
            <Text style={{fontSize: 24, fontWeight: "600"}}>strength and new thoughts."</Text>
            <Text style={{fontSize: 20}}>- Eleanor Roosevelt</Text>
          </View>
          <View style={styles.section}>
            <Text style={{fontSize: 20}}>I AM READY FOR AN AWESOME DAY!!!</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#9AE0F6',
    },
    section: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      width: 150, 
      height: 150, 
      marginTop: 120, 
      marginBottom: 10
    },
    header_text: {
      fontSize: 34, 
      marginBottom: 20, 
      fontWeight: "500"
    }
  });