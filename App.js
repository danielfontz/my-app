import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/icon.png")} style={{ width: 120, height: 120 }} />
      <Text style={styles.title}>App Title</Text>
      <View style={styles.btnWrapper}>
        <Pressable onPress={() => console.log("Pressable")}>
          <Text style={styles.btnPrimary}>Não tem cadastro</Text>
        </Pressable>
        <TouchableOpacity style={styles.btnSecondary} onPress={() => console.log("TouchableOpacity")}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  title: {
    fontSize: 32
  },
  btnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 24
  }, // empacota os botões e deixa em linha
  btnPrimary: {
    textDecorationLine: "underline",
    color: "black"
  }, // estilo com cor e underline
  btnSecondary: {
    backgroundColor: "blue",
    borderRadius: 16,
    padding: 10,
    color: "white"
  }, // cor de fundo e bordas

});
