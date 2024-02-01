import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CartScreen() {
  return (
    <View style={style.rootContainer}>
      <Text style={style.text}>Cart is empty :/</Text>
      <View style={style.container}>
        <View style={style.button}>
          <Ionicons name="add" color={"#3c0a6b"} size={26} />
        </View>
        <View style={style.button}>
          <Ionicons name="remove" color={"#3c0a6b"} size={26} />
        </View>
      </View>
    </View>
  );
}

export default CartScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    height: 40,
    margin: 12,
    borderBottomWidth: 2,
    borderColor: "#3c0a6b",
    padding: 10,
    width: "80%",
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
  },
  button: {
    borderWidth: 2,
    borderColor: "#3c0a6b",
    padding: 6,
    borderRadius: 10,
  },
});
