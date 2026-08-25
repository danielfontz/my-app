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
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {

  const navigation = useNavigation()

  return (
    <LinearGradient
      colors={["#EBC894", "#B49EF4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        style={styles.icon}
        source={require("../../assets/icons/arrow-left-svgrepo-com.png")}
      ></Image>
      <View style={styles.signBox}>
        <View style={{ gap: 12, alignItems: "center" }}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.normalText}>Crie uma conta para continuar!</Text>
        </View>
        <View style={styles.signForm}>
          <View style={{ gap: 6 }}>
            <TextInput style={styles.signInput} placeholder="Nome"></TextInput>
            <TextInput
              style={styles.signInput}
              placeholder="Sobrenome"
            ></TextInput>
            <TextInput
              style={styles.signInput}
              placeholder="exemplo@email.com"
            ></TextInput>
            <TextInput
              style={styles.signInput}
              placeholder="Data de nascimento"
            ></TextInput>
            <TextInput
              style={styles.signInput}
              placeholder="(00) 12345-6789"
            ></TextInput>
            <TextInput
              style={styles.signInput}
              placeholder="Nova senha"
            ></TextInput>
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
              Realizar cadastro
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", gap: 6, justifyContent: "center" }}
        >
          <Text style={styles.normalText}>Já possui um conta?</Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "140%",
                color: "#4D81E7",
                alignSelf: "flex-end",
              }}
            >
              Acesse sua conta
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
  signBox: {
    width: 343,
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
  icon: {
    width: 24,
    height: 24,
    alignSelf: "flex-start",
    marginLeft: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  normalText: {
    color: "grey",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "140%",
  },
  signForm: {
    gap: 16,
  },
  signInput: {
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
    gap: 24,
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
