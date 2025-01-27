import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import React from "react";
import { StyleSheet, View } from "react-native";


const HomeScreen = () => {
  return (
    <View>
      <Collapsible title="hey"/>
      <ExternalLink href="www.google.com"/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
