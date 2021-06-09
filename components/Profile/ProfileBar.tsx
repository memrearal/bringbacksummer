import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class ProfileBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
        <View style={styles.UserInfos}>
            <Image source={{uri: "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/39/1024x512/landscape-1475246706-hbz-mr-mrs-smith.jpg?resize=480:*"}} style={styles.Avatar} />
            <View style={styles.UserInfo}>
              <Text style={styles.Title}>memrearal</Text>
              <Text style={styles.Subtitle}>2+ year prime member.</Text>
            </View>
        </View>
        <TouchableOpacity>
          <View style={styles.EditButton}><Text style={{color: "#000"}}>Edit</Text></View>
        </TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		height: 70,
		backgroundColor: "#3022ad",
		paddingHorizontal: 10,
		flexDirection: "row",
    justifyContent: "space-between"
	},
  UserInfos: {
    flexDirection: "row"
  },
	Avatar : {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  UserInfo: {
    paddingHorizontal: 10,
  },
  Title: {
    fontWeight: "bold",
    color: "#fff"
  },
  Subtitle: {
    color: "#fff"
  },
  EditButton: {
    margin: 10,
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff"
  }
});
