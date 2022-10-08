import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Homepage(props) {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            console.log(json);
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <View style={styles.body}>
                    <FlatList contentContainerStyle={styles.list}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Button title={item.title + ',' + item.releaseYear} onPress={() => navigation.navigate('Details', {
                                item: item
                            })}/>
                        )}
                    />
                </View>
            )}

            {/* <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                    <Text>Go to Details</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        padding: 10,
        flex: 1
    },
    list: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
        justifyContent: "center"
    },
    footer: {
        backgroundColor: "rgb(135, 206, 235)",
        flexDirection: "row-reverse",
        height: 60,
        padding: 10
    }
});

export default Homepage;