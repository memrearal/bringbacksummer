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
				<View style={[Styles.row,Styles.spaceBetween]}>
					<View style={[styles.Group, styles.Group1]}>
						<View style={[Styles.row,Styles.spaceBetween]}>
							<View style={styles.Check}>
								<Text style={styles.SelectText}>Check In Date <Ionicons name="calendar-sharp" size={20} color="#d7d7d7" /></Text>
							</View>
							<View style={styles.Check}>
								<Text style={styles.SelectText}>Check Out Date <Ionicons name="calendar-sharp" size={20} color="#d7d7d7" /></Text>
							</View>
						</View>
					</View>
					<View style={[styles.Group, styles.Group2]}>
						<Text style={styles.SelectText}>1 Person <Ionicons name="person" size={20} color="#d7d7d7" /></Text>
					</View>
				</View>
				<TouchableOpacity style={styles.Button}>
					<Text style={styles.ButtonText}>SEARCH</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		padding: 10
	},
	TextInput: {
		marginVertical: 5,
		padding: 10,
	    height: 40,
	    borderWidth: 1,
	    borderColor: "#d7d7d7",
	    borderRadius: 5
	},
	Group: {
		marginVertical: 5,
		borderRadius: 5,
		borderColor: "#d7d7d7",
		borderWidth: 1,
		backgroundColor: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 5,
		height: 40,
		
	},
	Group1: {
		width: (Dimensions.get("window").width - 10) / 1.45,
	},
	Group2: {
		width: (Dimensions.get("window").width - 10) / 3.75
	},
	Check: {
		paddingHorizontal: 5,
	},
	SelectText: {
		textAlign: "center",
		color: "#d7d7d7",
		fontSize: 12
	},
	Button: {
		marginVertical: 5,
		backgroundColor: "#efbc0d",
		height: 40,
		borderRadius: 5,
		padding: 10
	},
	ButtonText: {
		textAlign: "center",
		fontWeight: "bold",
		color: "#fff"
	}
});