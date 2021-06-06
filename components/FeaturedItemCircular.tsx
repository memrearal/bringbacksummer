import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
export default class FeaturedItemCircular extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<View style={styles.Content}>
					<Image source={{uri: "https://storage.kucukoteller.com.tr/2019/04/27/1556351618696820.jpg"}} style={styles.Image} />
					<View style={styles.Infos}>
						<Text style={styles.Title}>Sahil Hotel</Text>
						<Text style={styles.SubTitle}>Yalıkavak</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		paddingLeft: 10,
		backgroundColor: "#fff",
		width: 90
	},
	Content: {
		flexDirection: "column"
	},
	Image: {
		height: 80,
		width: 80,
		borderRadius: 80,
	},
	Infos: {
		flexDirection: "column"
	},
	Title: {
		textAlign: "center",
		fontWeight: "bold",
		color: "#000"
	},
	SubTitle: {
		textAlign: "center",
		color: "#949494"
	}
})