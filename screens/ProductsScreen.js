import { View, Text, StyleSheet } from "react-native";
import ProductData from "../components/ProductData";

function ProductsScreen() {
  return (
    <View style={style.data}>
      <ProductData />
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
