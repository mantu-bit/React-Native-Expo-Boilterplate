import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Collapsible title="hey"/>
      <ExternalLink href="www.google.com"/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20
  }
});
