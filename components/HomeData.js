import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";

function DataShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jsonData = require("../data.json");
    setData(jsonData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.content}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    </View>
  );

  return (
    <FlatList
      style={{ height: "100%", marginBottom: -30 }}
      scrollEnabled
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default DataShow;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 4,
    fontSize: 20,
  },
  image: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    width: 260,
    height: 260,
    overflow: "hidden",
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: "#b5aebd",
    borderWidth: 2,
    borderColor: "#231036",
    borderRadius: 20,
    padding: 10,
    marginBottom: 4,
  },
  content: {
    alignItems: "center",
  },
});
