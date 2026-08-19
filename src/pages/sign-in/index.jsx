import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Checkbox } from "expo-checkbox";

export default function Login() {
  return (
    <LinearGradient
      colors={["#EBC894", "#B49EF4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.loginBox}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo/suki-logo-adm-black.png")}
        ></Image>
        <View style={{ gap: 12, alignItems: "center" }}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.normalText}>
            Digite seu e-mail e senha para acessar sua conta
          </Text>
        </View>
        <View style={styles.loginForm}>
          <View style={{ gap: 6 }}>
            <TextInput
              style={styles.loginInput}
              placeholder="cliente@email.com"
            ></TextInput>
            <TextInput
              style={styles.loginInput}
              placeholder="Digite sua senha"
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 5 }}
            >
              <Checkbox
                style={{ aspectRatio: 1 / 1, width: 19, padding: 5 }}
              ></Checkbox>
              <Text style={styles.normalText}>Lembrar-me o acesso</Text>
            </View>
            <Pressable>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: "140%",
                  color: "#4D81E7",
                }}
              >
                Esqueci a senha
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.loginOptions}>
          <TouchableOpacity
            style={[
              styles.btnSecondary,
              {
                width: "100%",
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              },
            ]}
          >
            <Text
              style={{
                lineHeight: "140%",
                fontWeight: 500,
                fontSize: 14,
                color: "white",
              }}
            >
              Acessar
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View style={styles.rowLine}></View>
            <Text style={styles.normalText}>Ou acessar com</Text>
            <View style={styles.rowLine}></View>
          </View>
          <View style={styles.loginMethodSection}>
            <TouchableOpacity style={styles.methodBtn}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../../assets/icons/google-color-svgrepo-com.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.methodBtn}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../../assets/icons/smartphone-svgrepo-com.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", gap: 6, justifyContent: "center" }}
        >
          <Text style={styles.normalText}>Novo por aqui?</Text>
          <Pressable>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "140%",
                color: "#4D81E7",
                alignSelf: "flex-end",
              }}
            >
              Crie sua conta
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
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
  loginBox: {
    width: 343,
    height: 561,
    padding: 24,
    gap: 24,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#ffffff99",

    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    aspectRatio: 654 / 404,
    height: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  rowLine: {
    width: "100%",
    height: 0,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
  },
  normalText: {
    color: "grey",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "140%",
  },
  loginForm: {
    gap: 16,
  },
  loginInput: {
    width: 295,
    height: 46,
    fontSize: 14,
    fontWeight: 140,
    backgroundColor: "white",
    color: "black",
    padding: 10,

    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 10,
  },
  loginOptions: {
    alignItems: "center",
    width: 295,
    height: 162,
    gap: 24,
  },
  loginMethodSection: {
    flexDirection: "row",
    gap: 15,
  },
  methodBtn: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eff0f6",
    alignItems: "center",
    justifyContent: "center",
    width: 62.5,
    height: 48,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
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
    backgroundColor: "#1D61E7",
    borderRadius: 16,
    padding: 10,
    color: "white",
  }, // cor de fundo e bordas
});
