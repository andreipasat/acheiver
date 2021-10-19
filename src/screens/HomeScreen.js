import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>test work 5</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
        title="Components"
    />
    <TouchableOpacity onPress={() => console.log('Touch press')}>
      <Text>List</Text>
    </TouchableOpacity>

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;