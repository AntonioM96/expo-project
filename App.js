import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
// import 'bootstrap/dist/css/bootstrap.min.css'; NOT SUPPORTED BY react-native !!!
import Navbar from './components/navbar';

const myApp = () => {
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
        <View>
            <Navbar />
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    );
};

export default myApp;