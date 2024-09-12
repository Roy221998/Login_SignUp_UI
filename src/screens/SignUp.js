import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { AuthContext } from "../context/AuthContext";

const SignUp = ({ navigation }) => {
  const [isHide, setIsHide] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.content}>
          <Text style={styles.heading}>Sign Up</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Fill in the below form and add life to
            </Text>
            <Text style={styles.text}>your car!</Text>
          </View>
          {/* Field 1 */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldName}>Name</Text>
            <View style={styles.field}>
              <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </View>
          {/* Field 2 */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldName}>Phone</Text>
            <View style={styles.field}>
              <TextInput
                placeholder="number"
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />
            </View>
          </View>
          {/* Field 3 */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldName}>Password</Text>
            <View style={styles.field}>
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
          {/* Checkbox  */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={() => setChecked(!isChecked)}
            />
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Agree with </Text>

              <Text style={{ textDecorationLine: "underline" }}>
                Terms & Conditions
              </Text>
            </View>
          </View>

          {/* Button */}
          <Pressable
            onPress={() => {
              register(name, phone, password);
              navigation.navigate("Home");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>

          {/* End text */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signUp}>Sign In</Text>
            </Pressable>
          </View>

          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.bottomText}>
                By login or sign up, you agree to our terms of use and
              </Text>
              <Text style={styles.bottomText}>privacy policy</Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/bottomLogo.png")}
          style={styles.bottomImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
   
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    position : "relative",
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    color: "#7F7F7F",
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 15,
  },
  fieldName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  field: {
    width: "100%",
    height: 48,
    borderColor: "#7F7F7F",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    paddingLeft: 10,
  },
  visibleButton: {
    position: "absolute",
    right: 12,
    top: "20%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#A3CFFF",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    // marginBottom: 500
    zIndex: 1000,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    zIndex: 1000,
  },
  signUp: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    zIndex: 1000,
  },
  bottomContainer: {
    marginBottom: 20,
  },
  bottomImage: {
    width: "100%",
    resizeMode: "cover",
    zIndex: 1,
    position: "absolute",
    bottom: "0",
  },
  bottomText: {
    textAlign: "center",
    color: "#7F7F7F",
    zIndex: 1,
    fontSize: 12,
  },
});