import React from 'react'
import Styles from '../../constants/Styles';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class ProfileInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
    const {key, value} = this.props.Data;
		return(
			<View style={styles.Container}>
          <Text style={styles.AccountInfoKey}>{key}</Text>
          <Text style={styles.AccountInfoValue}>{value}</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	Container: {
		paddingLeft: 10,
		flexDirection: "row",
    justifyContent: "space-between"
	},
  AccountInfoKey: {
    fontWeight: "bold",
    color: "#949494",
  },
	AccountInfoValue: {
    fontWeight: "bold",
    color: "#000"
  }
});
