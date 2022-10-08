import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Details(props) {
    let item = props.route.params.item;
    console.log('item: ');
    console.log(item);

    useEffect(function() {
        props.navigation.setOptions({ title: item.title });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}><Text style={{fontWeight: "bold"}}>Title</Text>: {item.title}</Text>
                <Text style={styles.text}><Text style={{fontWeight: "bold"}}>Release Year</Text>: {item.releaseYear}</Text>
                <Text style={styles.text}><Text style={{fontWeight: "bold"}}>Id</Text>: {item.id}</Text>
            </View>
            <View>
                <Button
                    title="Go to Details... again"
                    onPress={() => props.navigation.push('Details', {
                        item: item
                    })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        padding: 20
    },
    text: {
        fontSize: 20
    }
});

export default Details;