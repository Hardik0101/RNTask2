import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchScreen() {
  return (
    <View>
      <View style={style.container}>
        <TextInput style={style.input} placeholder="Search the Products" />
        <Ionicons name="search" color={"#3c0a6b"} size={26} />
      </View>
    </View>
  );
}

export default SearchScreen;

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3c0a6b",
    padding: 10,
    width: "80%",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
