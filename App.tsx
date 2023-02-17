import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function app() {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1F1F1F",
      alignItems: "center",
    },
    title: {
      color: "#FFF",
      fontSize: 30,
      textAlign: "center",
      marginTop: 50,
    },
    titleButton: {
      color: "#FFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    input: {
      borderColor: "#fff",
      borderBottomWidth: 2,
      height: 30,
      color: "#FFF",
      width: "70%",
      marginTop: 30,
      padding: 5,
      textAlign: "center",
    },
    buttonStyle: {
      backgroundColor: "#9332D6",
      color: "#fff",
      padding: 5,
      width: "35%",
      borderRadius: 5,
      marginTop: 20,
    },
    logoStyle: {
      height: 250,
      width: 250,
      marginBottom: 20,
      marginTop: 10,
    },
  });

  const [name, setName] = useState("");

  const handleClick = () => {
    console.log(name);
  };

  return (
    <View style={style.container}>
      <Image source={require("./assets/logo.png")} style={style.logoStyle} />

      <Text style={style.title}>Bem vindo!</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu nome..."
        placeholderTextColor="#fff"
        value={name}
        onChangeText={(e) => {
          setName(e);
        }}
      />

      <TouchableOpacity style={style.buttonStyle} onPress={handleClick}>
        <Text style={style.titleButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
