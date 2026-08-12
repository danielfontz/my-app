import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o login</Text>
      <View style={styles.loginForm}>
        <TextInput style={styles.loginInput} placeholder="login"></TextInput>
        <TextInput style={styles.loginInput} placeholder="senha"></TextInput>
        <TouchableOpacity style={[styles.btnSecondary, {width: "40%", alignSelf:"flex-end", alignItems:"center"}]}>
          <Text style={{ color: "white" }}>Acessar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  title: {
    fontSize: 30,
  },
  loginForm: {
    backgroundColor:"#f1f1f1",
    borderRadius: 20,
    gap: 10,
    width: "80%",
    padding: 10,
  },
  loginInput: {
    fontSize: 15,
    backgroundColor: "#d8d8d8",
    color: "black",
    padding: 10,
    borderRadius: 15,
  },
  btnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 24,
  }, // empacota os botões e deixa em linha
  btnPrimary: {
    textDecorationLine: "underline",
    color: "black",
  }, // estilo com cor e underline
  btnSecondary: {
    backgroundColor: "blue",
    borderRadius: 16,
    padding: 10,
    color: "white",
  }, // cor de fundo e bordas
});
