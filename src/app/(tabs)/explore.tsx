import React from "react";
import { Text, View } from "react-native";
import { StyleSheet, } from "react-native-unistyles";

const TabTwoScreen = () => {

  return (
    <View style={styles.container}>
      <Text>TabTwoScreen</Text>
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create((theme) => ({
  container:{
    flex:1,
    backgroundColor:theme.colors.white
  }
}));
