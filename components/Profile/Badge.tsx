import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default class Badge extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false
		}
	}
	render(){
    const {Title, Subtitle, Type} = this.props;
		return(
			<View style={styles.Container}>
				<View style={styles.Content}>
					<Image source={require("../../assets/images/badges/bronze.png")} style={styles.Image} />
					<View style={styles.Infos}>
						<Text style={styles.Title}>{Title}</Text>
            <Text style={styles.Subtitle}>{Subtitle}</Text>
            <Text style={styles.Type}>{Type}</Text>
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
		marginTop: 5,
		flexDirection: "column"
	},
	Title: {
		fontSize: 14,
		textAlign: "center",
		fontWeight: "bold",
		color: "#000"
	},
	Subtitle: {
		textAlign: "center",
		color: "#949494"
	},
  Type: {
		textAlign: "center",
		color: "#949494"
	}
})
