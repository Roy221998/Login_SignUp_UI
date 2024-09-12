import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { AuthContext } from "../context/AuthContext";

const SignIn = ({ navigation }) => {
  const [isHide, setIsHide] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Sign In</Text>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>
            Hi! Welcome back, you
          </Text>
          <Text style={styles.welcomeText}>have been missed</Text>
        </View>

        {/* Phone Number Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Phone</Text>
          <View style={styles.field}>
          <Ionicons name="call-outline" size={24} color="black"style={styles.icon}/>
            <TextInput
              placeholder="phone number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.fieldName}>Password</Text>
          <View style={styles.field}>
            <Ionicons
              name="lock-closed"
              size={24}
              style={styles.icon}
            />
            <TextInput
              placeholder="password"
              secureTextEntry={isHide}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.visibleButton}
              onPress={() => setIsHide(!isHide)}
            >
              {isHide === true ? (
                <Ionicons name="eye-off" size={24} color="black" />
              ) : (
                <Ionicons name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In Button */}
        <Pressable
          style={styles.button}
          onPress={() => {
            login(phone, password);
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        {/* Or Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Google & Apple Sign In */}
        <View style={styles.socialButtonContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <ImageBackground
            source={require("../assets/Mask group (2).png")}
            style={styles.footerImage}
          >
            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                By login or sign up, you agree to our terms of use and
              </Text>
              <Text style={styles.footerText}>privacy policy</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8", // Light background color
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 30,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Darker text color
  },
  textContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  inputContainer: {
    marginBottom: 15,
  },
  fieldName: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333", // Darker text color
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  visibleButton: {
    position: "absolute",
    right: 10,
  },
  button: {
    backgroundColor: "#A3CFFF",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 14,
    color: "#7F7F7F",
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap:10,
    marginBottom: 20,
  },
  socialButton: {
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  signUpText: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  signUpLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#black",
    textDecorationLine: "underline",

  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  footerImage: {
    width: "100%",
    // height: 100,
  },
  footerTextContainer: {
    padding: 10,
  },
  footerText: {
    textAlign: "center",
    color: "#7F7F7F",
    fontSize: 12,
  },
});
