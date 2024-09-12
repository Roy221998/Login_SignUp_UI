import React from "react";
import { Button, StyleSheet, Text, View, Pressable, Image, Dimensions } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../assets/topLeftLogo.png")}
          style={styles.topLeftLogo}
        />
        <Image
          source={require("../assets/Mask group.png")}
          style={styles.topRightLogo}
        />
        {/* Logo image */}
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Sparkle & Shine Transform</Text>
        <Text style={styles.heading}>Your Drive with Every Wash!</Text>
      </View>

      {/* Button */}
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.button}>Let’s Start</Text>
      </Pressable>

      {/* End text */}
      <View style={styles.endTextContainer}>
        <Text style={styles.endText}>Already have an account?{" "}</Text>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signIn}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    height: '70%',
    position: 'relative',
  },
  topLeftLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    // width: 100, // Adjust size as needed
    // height: 100, // Adjust size as needed
  },
  topRightLogo: {
    position: 'absolute',
    top: 0,
    right: 0,
    // width: 100, // Adjust size as needed
    // height: 100, // Adjust size as needed
  },
  logoContainer: {
    width: '100%',
    position: 'absolute',
    top: '30%',
   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logo: {
  //   width: 250, // Adjust size as needed
  //   height: 300, // Adjust size as needed
  // },
  headingContainer: {
    alignItems: 'center',
    // marginVertical: 20,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#7F7F7F",
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#A3CFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  endTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  endText: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  signIn: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
