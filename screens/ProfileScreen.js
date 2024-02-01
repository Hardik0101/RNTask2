import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <View>
      <View style={style.container}>
        <Image
          style={style.image}
          source={require("../assets/image/profile.png")}
        />
        <View style={style.icons}>
          <FontAwesome name="edit" color={"#3c0a6b"} size={20} />
          <FontAwesome name="list" color={"#3c0a6b"} size={20} />
        </View>
      </View>
      <View style={style.personData}>
        <Text>Persnol Details</Text>
        <View>
          <Text>Name:</Text>
          <Text>Address:</Text>
          <Text>Mobile No.:</Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const style = StyleSheet.create({
  image: {
    marginTop: 4,
    marginLeft: 6,
    width: 100,
    height: 100,
    overflow: "hidden",
    marginBottom: 8,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "#3c0a6b",
    marginHorizontal: 14,
    padding: 4,
    marginBottom: 6,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  personData: {
    marginHorizontal: 12,
  },
});
