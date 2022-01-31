import {React, useReducer, useState} from "react";
import {Text, StyleSheet, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Button from "../components/Button";

const itemsReducer = (state, action) => {
    //state === {items}
    //action add item === {{ title : 'Deal 1', type : 'critical', done : false}}
    return { ...state, items : state.items.push(action.item)};
}

const ListScreen = () => {
    // let items = [
    //     { title : 'Deal 1', type : 'critical', done : false},
    //     { title : 'Deal 2', type : 'motivation', done : false},
    //     { title : 'Deal 3', type : 'spread', done : false},
    //     { title : 'Deal 4', type : 'free', done : false},
    // ];
    const [text, onChangeTextItem] = useState("Useless Text");
    //achivier135
    //const [stateItems, onChangeStateItemsValue] = React.useState(items);
    const [state, dispatch] = useReducer(itemsReducer, {items : [{title : 'Deal 1', type : 'critical', done : false}]})
    
    let onPressSave = function(text) {
        //let changedItems = stateItems;
        // changedItems.push({
        //     title: text, type : 'critical', done : true
        // });
        //onChangeStateItemsValue(changedItems);
        dispatch({item : {title: text, type : 'critical', done : true}});
        onChangeTextItem('');
    }
    
    return (
        <View>
            <Text style={styles.textStyleTitle}>What you did today!</Text>
            
            <TextInput style={styles.inputStyle} value={text} onChangeText={onChangeTextItem}/>
            <Button 
                title="Save" 
                onPress={() => {
                    onPressSave(text);
                }}
            />

            <FlatList
                style={{marginTop: 20}}
                keyExtractor={(item, index) => item.title+index}
                data={state.items}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => console.log(item.title)}>
                            <Text style={styles.textStyleItems}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textStyleTitle: {
        marginVertical: 20,
        fontSize: 20,
        textAlign: "center"
    },

    textStyleItems: {
        margin: 10,
        fontSize: 16,
        textAlign: "left"
    },
    inputStyle: {
        height: 50,
        margin : 10,
        borderWidth: 1,
        borderColor: "purple",
        padding: 10,
    },
});

export default  ListScreen;