import { View, Text, StyleSheet } from "react-native";
import HomeScreenData from "../components/HomeScreenData";

function HomeScreen() {
  return (
    <View style={style.container}>
      <HomeScreenData />
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
