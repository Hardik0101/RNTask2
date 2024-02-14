import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

function ProductData() {
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
        <View style={styles.priceData}>
          <Text style={styles.price}>Price: {item.price}</Text>
          <Text>
            Rating: {item.rating.rate} (Count: {item.rating.count})
          </Text>
          <Text>Category: {item.category}</Text>
        </View>
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

export default ProductData;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 4,
  },
  image: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  rootContainer: {
    backgroundColor: "#b5aebd",
    borderWidth: 2,
    borderColor: "#231036",
    borderRadius: 20,
    padding: 10,
    marginBottom: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceData: {
    marginLeft: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "400",
    color: "#110321",
  },
});
