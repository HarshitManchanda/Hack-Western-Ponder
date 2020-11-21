import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const GratitudeJournalEntry = (props) => {
    return (
        <TouchableHighlight onPress={() => {}} style={styles.container} underlayColor='#EEE7E7'>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.date}>{props.date}</Text>
                <Text style={styles.description} numberOfLines={4}>{props.description}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    date: {
        fontStyle: 'italic',
        fontSize: 14
    },
    description: {
        fontSize: 18
    }
});  

export default GratitudeJournalEntry