import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
export default class FeaturedItem extends React.Component {
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
					<ImageBackground source={{uri: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/35/73/357394686.jpeg"}} style={styles.Image}>
						<Text style={styles.FavouriteButton}><Ionicons name="heart" size={18} color="white" /></Text>
					</ImageBackground>
					<View style={styles.Infos}>
						<View style={styles.InfoRow}>
							<Text style={styles.InfoCategory}>
								FRIENDS
							</Text>
						</View>
						<View style={styles.InfoRow}>
							<Text style={styles.Title}>Hotel HapImag Resort Sea Garden</Text>
						</View>
						<View style={styles.InfoRow}>
							<View style={styles.Points}>
								<Ionicons name="star" size={16} color="gold" />
								<Ionicons name="star" size={16} color="gold" />
								<Ionicons name="star" size={16} color="gold" />
								<Ionicons name="star" size={16} color="gold" />
								<Ionicons name="star" size={16} color="gold" />
								<Text style={styles.Reviews}>40 Reviews</Text>
							</View>
						</View>
						<View style={styles.InfoRow}>
							<Text style={styles.Location}><Ionicons name="ios-location-outline" size={16} color="grey" /> BODRUM</Text>
							<View style={styles.PriceWrapper}>
								<Text style={styles.PriceText}>Starting from</Text>
								<Text style={styles.Price}>255$</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		height: 320,
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: "#e6e6e6"
	},
	Content: {
		flexDirection: "column"
	},
	Image: {
		height: 200,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		overflow: "hidden",
		justifyContent: "flex-start"
	},
	InfoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 2
	},
	InfoCategory:{
		fontSize: 12,
		fontWeight: "bold",
		color: "#949494"
	},
	Points: {
		flexDirection: "row"
	},
	Reviews: {
		marginLeft: 10,
		color: "#000",
		fontWeight: "bold"
	},
	FavouriteButton: {
		alignSelf: "flex-end",
		margin: 10,
		paddingHorizontal: 5,
		height: 20,
		borderRadius: 5,
		fontSize: 18,
		color: "#fff"
	},
	Infos: {
		height: 50,
		margin: 10
	},
	InfoLeft: {
		width: "80%",
		height: 50,
		flexDirection: "column",
		padding: 5
	},
	InfoRight: {
		width: "20%",
		height: 50,
		padding: 5,
		justifyContent: "center",
		alignItems: "center"
	},
	Title: {
		fontFamily: "Roboto_700Bold",
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "#000"
	},
	Location: {
		marginTop: 5,
		fontSize: 14,
		fontWeight: "bold",
		color: "#949494"
	},
	PriceWrapper: {
	},
	PriceText: {
		fontWeight: "bold",
		fontSize: 10
	},
	Price: {
		fontFamily: 'Roboto_700Bold',
		fontWeight: "bold",
		color: "#000",
		textAlign: "center"
	}
})