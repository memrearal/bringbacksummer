import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import HomeSearchWithFilter from "../components/Home/SearchWithFilter";

import FeaturedContainer from "../components/FeaturedContainer";
import FeaturedItem from "../components/FeaturedItem";
import FeaturedItemCircular from "../components/FeaturedItemCircular";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 25}}>
      <HomeSearchWithFilter />
      <FeaturedContainer horizontal={true} scrollbar={false} title="Featured Otels" subtitle="Find out travel's emerging trends.">
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
      </FeaturedContainer>
      <FeaturedContainer horizontal={true} scrollbar={false} title="Featured Otels" subtitle="Find out travel's emerging trends.">
          <View style={styles.Item}><FeaturedItem /></View>
          <View style={styles.Item}><FeaturedItem /></View>
          <View style={styles.Item}><FeaturedItem /></View>
          <View style={styles.Item}><FeaturedItem /></View>
      </FeaturedContainer>
      <FeaturedContainer horizontal={true} scrollbar={false} title="Best in this season" subtitle="Find out this season's best places.">
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
        <FeaturedItemCircular />
      </FeaturedContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Item: {
    marginHorizontal: 10,
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
