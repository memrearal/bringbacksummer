import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
export default class FeaturedContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}
	render(){
		const {title, subtitle, children, horizontal, scrollbar} = this.props;
		return(
			<View style={styles.Container}>
				<View style={styles.Header}>
					<Text style={styles.Title}>{title}</Text>
					<Text style={styles.SubTitle}>{subtitle}</Text>
				</View>
				<ScrollView horizontal={horizontal} contentContainerStyle={styles.Items} showsHorizontalScrollIndicator={scrollbar}>
					{children}
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	Container: {
	},
	Header: {
		padding: 10
	},
	Title: {
		fontWeight: "Roboto_700Bold",
		fontWeight: "bold",
		fontSize: 16,
		color: "#000"
	},
	SubTitle: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#949494"
		//color: "#d7d7d7"
	},
	Items: {
		paddingRight: 10,
		paddingBottom: 20
	}
});
