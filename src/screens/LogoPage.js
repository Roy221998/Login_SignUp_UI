import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const LogoPage = ({ navigation }) => {
  useEffect(()=>{
    setTimeout(() => {
        navigation.replace("Welcome")
    }, 10000);
  },[]);
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require("../assets/logo page.png")}
        style={styles.background}
        resizeMode="fit"
      />
    </View>
  );
};

export default LogoPage;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  main: {
    flex: 1,
  },
});
