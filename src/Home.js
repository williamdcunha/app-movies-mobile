import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import StarRating from "react-native-star-rating";

export default function Home() {
  const navigation = useNavigation();
  const filmes = useSelector((states) => states.FilmeReducer.data);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { index })}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.poster }} style={styles.posterImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.genre}>{item.genre}</Text>
        <StarRating disabled={true} maxStars={5} rating={item.rating} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  posterImage: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});
