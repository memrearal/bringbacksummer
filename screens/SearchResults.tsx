import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import SearchBar from "../components/Search/SearchBar";

import FeaturedContainer from "../components/FeaturedContainer";
import FeaturedItemFullWidth from "../components/FeaturedItemFullWidth";

export default function SearchResults(){
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.Item}><FeaturedItemFullWidth /></View>
      <View style={styles.Item}><FeaturedItemFullWidth /></View>
      <View style={styles.Item}><FeaturedItemFullWidth /></View>
      <View style={styles.Item}><FeaturedItemFullWidth /></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Item: {
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  }
});
