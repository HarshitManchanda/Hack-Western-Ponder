import React from 'react';
import { Text, ScrollView, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native';
import GratitudeJournalEntry from './GratitudeJournalEntry.js';

const GratitudeJournal = () => {
    const journalEntries = [
        {title: 'What made you smile today?', date: '11/21/2020', description: 'Expanded entry description for longer entries'},
        {title: 'What made you smile today?', date: '11/21/2020', description: 'This is an example of a longer entry that requires multiple lines'},
        {title: 'What made you smile today?', date: '11/21/2020', description: 'This will be a very veeeeeeeeeeeery extremely long entry that cannot fit in the regular gratitude journal page preview and has to be expanded (still needs to be done) to be viewed in full'},
        {title: 'What made you smile today?', date: '11/21/2020', description: 'This will be a very veeeeeeeeeeeery extremely long entry that cannot fit in the regular gratitude journal page preview and has to be expanded (still needs to be done) to be viewed in full'},
        {title: 'What made you smile today?', date: '11/21/2020', description: 'This will be a very veeeeeeeeeeeery extremely long entry that cannot fit in the regular gratitude journal page preview and has to be expanded (still needs to be done) to be viewed in full'},
    ];

    const GratitudeJournalEntries = journalEntries.map(entryData => (
        <GratitudeJournalEntry title={entryData.title} date={entryData.date} description={entryData.description}/>
    ));

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Gratitude Journal</Text>
            <TouchableHighlight
                style={styles.button}
                onPress={() => {}}
                underlayColor='#000000'>
                <Text style={styles.buttonText}>Add Entry</Text>
            </TouchableHighlight>
            <ScrollView height={400}>
                {GratitudeJournalEntries}
            </ScrollView>
            <TouchableHighlight
                style={styles.button}
                onPress={() => {}}
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
        fontSize: 36,
        textAlign: 'center',
        paddingVertical: 20
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
        fontSize: 24,
    }
});  

export default GratitudeJournal