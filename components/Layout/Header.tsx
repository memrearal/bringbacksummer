import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'; 

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		};
	}
	render(){
		return(
			<View style={styles.HeaderContainer}>
				<View style={styles.HeaderContent}>
					<Text style={styles.ButtonText}>{this.props.backButton ? <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}><Ionicons name="arrow-back-outline" size={24} color="#fff" /></TouchableOpacity> : <Ionicons name="menu" size={24} color="#fff" />}</Text>
					<Text style={styles.LogoText}>BRINGBACKSUMMER</Text>
					<Text style={styles.ButtonText}><Ionicons name="notifications-outline" size={24} color="#fff" /></Text>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	HeaderContainer: {
		height: 90,
		paddingTop: Constants.statusBarHeight-30,
		backgroundColor: "#3022ad"
	},
	HeaderContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 40,
		marginHorizontal: 20
	},
	ButtonText: {
		fontWeight: "bold",
		color: "#fff"
	},
	LogoText: {
		fontFamily: 'RobotoCondensed_700Bold',
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 16,
		color: "#fff"
	}
})