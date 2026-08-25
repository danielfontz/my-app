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
import {
  LinearGradient,
} from "expo-linear-gradient";

export default function ForgotPassword({ navigation }) {
  return (
    <LinearGradient
      colors={['#EBC894', '#B49EF4']}
      start={{ x: 0, y: 0}}
      end={{ x:1, y: 1}}
      style={styles.container}
    >
      <View style={styles.loginBox}>
        <Image style={styles.logoImage}></Image>
        <View style={{gap: 12, alignItems: 'center',}}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.normalText}>Digite seu e-mail e senha para acessar sua conta</Text>
        </View>
        <View style={styles.loginForm}>
          <View style={{gap: 6,}}>
            <TextInput style={styles.loginInput} placeholder="cliente@email.com"></TextInput>
            <TextInput style={styles.loginInput} placeholder="Digite sua senha"></TextInput>
          </View>
          <View>
            <Pressable>
              <Text style={{fontSize: 12, fontWeight: 600, lineHeight: '140%', color: '#4D81E7', alignSelf: 'flex-end',}}>Esqueci a senha</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.loginOptions}>
          <TouchableOpacity style={[styles.btnSecondary, {width: "100%", height: 48, alignItems: "center", justifyContent: "center", padding: 10,}]}>
            <Text style={{  lineHeight: "140%", fontWeight: 500, fontSize: 14, color: "white" }}>Acessar</Text>
          </TouchableOpacity>
          <Text style={styles.normalText}>Ou acessar com:</Text>
          <View style={styles.loginMethodSection}>
            <TouchableOpacity style={styles.methodBtn}>
              <Image style={{backgroundColor: 'blue', width: 18, height: 18,}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.methodBtn}>
              <Image style={{backgroundColor: 'red', width: 18, height: 18,}}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row", gap: 6, justifyContent: "center",}}>
          <Text style={styles.normalText}>
            Novo por aqui?
          </Text>
          <Pressable>
              <Text style={{fontSize: 12, fontWeight: 600, lineHeight: '140%', color: '#4D81E7', alignSelf: 'flex-end',}}>Crie sua conta</Text>
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
    borderColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: "#ffffff99",

    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 34,
    height: 34,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  normalText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '140%',
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
    borderColor: '#d8d8d8',
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
