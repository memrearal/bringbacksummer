import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

export default class SearchWithFilter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<TextInput style={styles.TextInput} placeholder={"Hotel name or destination..."} placeholderTextColor="#d7d7d7" />
				<TouchableOpacity style={styles.Button} onPress={this.props.onPress}>
					<Text style={styles.ButtonText}>SEARCH</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		height: 60,
		backgroundColor: "#3022ad",
		paddingHorizontal: 10,
		flexDirection: "row"
	},
	TextInput: {
		width: "75%",
		backgroundColor: "#fff",
		marginVertical: 5,
		marginRight: 10,
		padding: 10,
	    height: 40,
	    borderRadius: 3
	},
	Button: {
		marginVertical: 5,
		backgroundColor: "#efbc0d",
		height: 40,
		borderRadius: 3,
		padding: 10
	},
	ButtonText: {
		width: 60,
		textAlign: "center",
		fontWeight: "bold",
		color: "#fff"
	}
});