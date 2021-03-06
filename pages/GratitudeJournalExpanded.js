import 'react-native-gesture-handler';
import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableHighlight, SafeAreaView, TextInput, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const GratitudeJournalExpanded = ({ navigation, route }) => {
    const state = {
        title: route.params['title'],
        date: route.params['date'],
        description: route.params['description']
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.title} multiline={true} onChangeText={(value) => state.title = value}>{route.params['title']}</TextInput>
            <Text style={styles.date}>{new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}</Text>
            <View borderWidth={2} marginHorizontal={5}>
                <ScrollView style={styles.textInput} textAlignVertical={true} keyboardDismissMode='on-drag'>
                    <TextInput style={styles.description} multiline={true} onChangeText={(value) => state.description = value}>{route.params['description']}</TextInput>
                </ScrollView>
            </View>
            <TouchableHighlight
                style={styles.button}
                onPress={() => {
                    const db = SQLite.openDatabase('db.ponder') // returns Database object
                    db.transaction(function(txn) {
                        txn.executeSql('INSERT INTO gratitudeJournalEntries (title, date, description) values (?, ?, ?)', [state.title, state.date, state.description], navigation.navigate('Gratitude', {}));
                    })
                }}
                underlayColor='#000000'>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFF8F8',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        marginHorizontal: 5,
        maxHeight: 150
    },
    date: {
        fontStyle: 'italic',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 10
    },
    description: {
        fontSize: 24
    },
    textInput: {
        height: 275,
        marginHorizontal: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#FC545E',
        marginVertical: 5,
        marginHorizontal: 10
    },
    buttonText: {
        paddingVertical: 15,
        color: '#FFFBFB',
        backgroundColor: '#FC545E',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 28,
    }
});  

export default GratitudeJournalExpanded