import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native';
import GratitudeJournalEntry from './GratitudeJournalEntry.js';
import * as SQLite from 'expo-sqlite';

let journalEntries = [];

const GratitudeJournal = ({ navigation }) => {
    useEffect(() => {
        const db = SQLite.openDatabase('db.ponder') // returns Database object
        db.transaction(function(txn) {
            // txn.executeSql('DROP TABLE gratitudeJournalEntries');
            txn.executeSql('CREATE TABLE IF NOT EXISTS gratitudeJournalEntries(id INTEGER PRIMARY KEY NOT NULL, title TEXT, date TEXT, description TEXT)');
            txn.executeSql('SELECT * FROM gratitudeJournalEntries', [], function (tx, res) {
                journalEntries = [];
                for (let i = 0; i < res.rows.length; ++i) {
                    journalEntries.unshift(res.rows.item(i));
                }
            });
        });
    }, [])

    const GratitudeJournalEntries = journalEntries.map(entryData => (
        <GratitudeJournalEntry title={entryData.title} date={entryData.date} description={entryData.description} navigation={navigation}/>
    ));

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My Gratitude Journal</Text>
            <TouchableHighlight
                style={styles.button}
                onPress={() => navigation.navigate('GratitudeExpanded', {})}
                underlayColor='#ff7a83'>
                <Text style={styles.buttonText}>Add Entry</Text>
            </TouchableHighlight>
            <ScrollView height={400}>
                {GratitudeJournalEntries}
            </ScrollView>
            <TouchableHighlight
                style={styles.button}
                onPress={() => navigation.navigate('Home', {})}
                underlayColor='#ff7a83'>
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
        fontSize: 36,
        textAlign: 'center',
        paddingVertical: 20
    },
    button: {
        backgroundColor: '#FC545E',
        marginVertical: 5,
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        paddingVertical: 15,
        color: '#FFFBFB',
        textAlign: 'center',
        fontSize: 24,
    }
});  

export default GratitudeJournal