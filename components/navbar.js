import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const navbar = () => {
    return (
        <View style={styles.container}>
            <Text>Edit</Text>
            <Text>This is title</Text>
            <Text>Add</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4', 
        padding: 10,
        paddingTop: 40, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default navbar;