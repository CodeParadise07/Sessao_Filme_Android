import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";

export function Login() {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={style.container}>
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
