import { View, Text, StyleSheet } from "react-native";
import HomeData from "../components/HomeData";

function HomeScreen() {
  return (
    <View style={style.container}>
      <HomeData />
    </View>
  );
}

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
