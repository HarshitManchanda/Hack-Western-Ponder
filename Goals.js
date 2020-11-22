import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, ImageBackground} from 'react-native';

export default function Goals() {
  return (
    <View style={styles.container}>
      <View style={styles.top_section}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight underlayColor="#FFFFFF" onPress={() => Alert.alert('Button Pressed')} style={[styles.goal_section, styles.goal_left]}>
            <View>
              <Text style={{fontSize: 22}}>Weekly</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#E1E1E1" onPress={() => Alert.alert('Button Pressed')} style={[styles.goal_section, styles.goal_right]}>
            <View>
              <Text style={{fontSize: 22}}>Monthly</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={[styles.number_section, styles.number_left]}>
            <Text style={{fontSize: 44}}>4</Text>
            <Text style={{fontSize: 22, marginTop: 10}}>Achieved</Text>
          </View>
          <View style={[styles.number_section, styles.number_right]}>
            <Text style={{fontSize: 44}}>5</Text>
            <Text style={{fontSize: 22, marginTop: 10}}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom_section}>
        <Text style={{fontSize: 32, marginTop: 20, marginBottom: 20}}>Goals for the week</Text>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Finish the Ponder App</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Finish the Ponder App</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Finish the Ponder App</Text>
          </View>
        </View>
        <View style={styles.task_bar}>
          <View style={styles.circle_button}>
          </View>
          <View>
            <Text style={{fontSize: 18}}>Finish the Ponder App</Text>
          </View>
        </View>
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
    backgroundColor: '#E1E1E1'
  },
  number_section: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
  task_bar: {
    flexDirection: 'row', 
    width: 350, 
    height: 60, 
    backgroundColor: '#F9F6F6', 
    alignItems: 'center', 
    borderRadius: 15, 
    marginTop: 10, 
    marginBottom: 20
  }
});