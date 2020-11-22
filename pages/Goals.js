import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, ImageBackground } from 'react-native';

export default function Goals({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight underlayColor="#FFFFFF" onPress={() => Alert.alert('Button Pressed')} style={[styles.goal_section, styles.goal_left]}>
            <View>
              <Text style={{fontSize: 22}}>Weekly</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#4945F4" onPress={() => Alert.alert('Button Pressed')} style={[styles.goal_section, styles.goal_right]}>
            <View>
              <Text style={{fontSize: 22}}>Monthly</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={[styles.number_section, styles.number_left]}>
            <Text style={{fontSize: 44, marginBottom: 10}}>2</Text>
            <Text style={{fontSize: 22, marginTop: 6}}>Achieved</Text>
          </View>
          <View style={[styles.number_section, styles.number_right]}>
            <Text style={{fontSize: 44, marginTop: 20}}>2</Text>
            <Text style={{fontSize: 22, marginTop: 10}}>Marching</Text>
            <Text style={{fontSize: 22}}>Towards</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom_section}>
        <Text style={{fontSize: 32, marginTop: 20, marginBottom: 10}}>Goals for the week</Text>
        <View style={styles.task_bar}>
            <View style={styles.circle_button}>
              <ImageBackground source={require('../assets/circle-cropped.png')} style={styles.image}>
              </ImageBackground>
            </View>
          <View>
            <Text style={{fontSize: 18}}>Finish the Ponder App</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
            <ImageBackground source={require('../assets/circle-cropped.png')} style={styles.image}>
            </ImageBackground>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Make and edit the video</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Collect all badges</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
            {/* <ImageBackground source={require('../assets/circle-cropped.png')} style={styles.image}>
            </ImageBackground> */}
          </View>
          <View>
            <Text style={{fontSize: 18}}>Win the first prize</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: "center"}}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => Alert.alert('Button Pressed')}
          underlayColor='#ff7a83'>
          <Text style={styles.buttonText}>Add Goal</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Home', {})}
          underlayColor='#ff7a83'>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5A57EF',
  },
  top_section: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  bottom_section: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
  },
  goal_section: {
    width: 150,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  goal_left: {
    marginRight: -18
  },
  goal_right: {
    marginLeft: -18,
    backgroundColor: '#4945F4'
  },
  number_section: {
    width: 140,
    height: 140,
    backgroundColor: '#FFFFFF',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },  
  number_left: {
    marginRight: 15,
  },
  number_right: {
    marginLeft: 15,
  },
  circle_button: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginLeft: 15, 
    marginRight: 40,
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: 23,
    height: 23,
    marginTop: 1.5,
    marginLeft: 1.5
  },
  task_bar: {
    flexDirection: 'row', 
    width: 350, 
    height: 60, 
    backgroundColor: '#F9F6F6', 
    alignItems: 'center', 
    borderRadius: 15, 
    marginTop: 10, 
    marginBottom: 20
  },
  button: {
      backgroundColor: '#FC545E',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 5,
      marginHorizontal: 10,
      width: 180
  },
  buttonText: {
      paddingVertical: 15,
      color: '#FFFBFB',
      textAlign: 'center',
      fontSize: 24,
  }
});