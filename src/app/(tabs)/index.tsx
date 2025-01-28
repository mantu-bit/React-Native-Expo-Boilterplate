import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        This is HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create((theme) => ({
  container:{
    flex:1,
    backgroundColor:theme.colors.primary
  }
}));
