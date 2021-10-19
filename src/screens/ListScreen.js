import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

const ListScreen = () => {
    let items = [
        { title : 'Deal 1', type : 'critical', done : false},
        { title : 'Deal 2', type : 'motivation', done : false},
        { title : 'Deal 3', type : 'spread', done : false},
        { title : 'Deal 4', type : 'free', done : false},
    ];
    return (
        <FlatList
            keyExtractor={(item) => item.title}
            data={items}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => console.log(item.title)}>
                        <Text style={styles.textStyle}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    },
});

export default  ListScreen;