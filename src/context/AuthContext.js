import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const register = (name, phone, password) => {
    axios
      .post("https://tor.appdevelopers.mobi/api/register", {
        name,
        phone,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const login = (phone, password) => {
    axios
      .post("https://tor.appdevelopers.mobi/api/login", {
        phone,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  return (
    <AuthContext.Provider value={{ register, login, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
