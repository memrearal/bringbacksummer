import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import ProfileBar from "../components/Profile/ProfileBar";
import ProfileInfo from "../components/Profile/ProfileInfo";
import Badge from "../components/Profile/Badge";

import FeaturedContainer from "../components/FeaturedContainer";
import FeaturedItem from "../components/FeaturedItem";
import FeaturedItemCircular from "../components/FeaturedItemCircular";

export default class ProfileScreen extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 25}}>
        <ProfileBar />
        <FeaturedContainer horizontal={false} scrollbar={false} title="Account Information" subtitle="Take a look at your membership.">
          <ProfileInfo Data={{key: "Username:", value:"memrearal"}} />
          <ProfileInfo Data={{key: "E-Mail:", value:"secret@mail.com"}} />
          <ProfileInfo Data={{key: "Privacy:", value:"Private"}} />
        </FeaturedContainer>
        <FeaturedContainer horizontal={true} scrollbar={false} title="Badges" subtitle="Your rewards.">
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
          <Badge BadgeImg="bronze.png" Title="LET'S GO!" Subtitle="10 hotel trips." Type="Bronze" />
        </FeaturedContainer>
        <FeaturedContainer horizontal={true} scrollbar={false} title="Where you've stayed" subtitle="You stayed in these places.">
            <View style={styles.Item}><FeaturedItem /></View>
            <View style={styles.Item}><FeaturedItem /></View>
            <View style={styles.Item}><FeaturedItem /></View>
            <View style={styles.Item}><FeaturedItem /></View>
        </FeaturedContainer>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Item: {
    marginLeft: 10,
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
