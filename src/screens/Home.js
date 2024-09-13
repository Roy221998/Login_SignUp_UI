import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo?.data?.name);
  return (
    <View>
      <Image source={require("../assets/logo.png")} />

      <Text style={{ fontWeight: "bold", fontSize: 26, marginBottom: 25,textAlign:"center"}}>
        Home  {userInfo?.data?.name}
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text style={styles.button}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#A3CFFF",
    width: "100%",
    marginTop: 15,
    padding: 10,
    borderRadius: 30,
  },
});
