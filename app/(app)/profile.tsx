import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>About Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  }
});
