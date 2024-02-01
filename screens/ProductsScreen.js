import { View, Text, StyleSheet } from "react-native";
import DataShow from "../components/DataShow";

function ProductsScreen() {
  return (
    <View style={style.data}>
      <DataShow />
    </View>
  );
}

export default ProductsScreen;

const style = StyleSheet.create({
  data: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
