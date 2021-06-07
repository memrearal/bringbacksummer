import React from 'react'
import { View, Text, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
			username: "",
			password: "",
			error: null,
		}
		this.login = this.login.bind(this);
	}
	login(){
		var username = String(this.state.username);
		var password = String(this.state.password);
		if(username.trim() != "" && password.trim() != ""){
			this.setState({error: null});
			this.props.navigation.replace("Home");
		}else{
			this.setState({error: "Boş giriş yapamazsınız."});
		}
	}
	render(){
		return(
			<View style={styles.Container}>
				<View style={styles.LogoWrapper}>
					<Text style={styles.Logo}>BRINGBACKSUMMER</Text>
					<Text style={styles.LogoSubtext}>Login</Text>
				</View>
				<View style={styles.Split} />
				<View style={styles.InputWrapper}>
					<Text style={styles.InputLabel}>Username</Text>
					<TextInput style={styles.Input} autoCapitalize="none" autoCompleteType="username" onChangeText={(text) => this.setState({username: text})} value={this.state.username} />
				</View>
				<View style={styles.InputWrapper}>
					<Text style={styles.InputLabel}>Password</Text>
					<TextInput style={styles.Input} autoCompleteType="password" secureTextEntry onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
				</View>
				<View style={styles.Split} />
				<TouchableOpacity onPress={this.login}>
					<View style={styles.Button}>
						<Text style={styles.ButtonText}>Login</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate("Register")}}>
					<View style={styles.Redirect}>
						<Text style={styles.RedirectText}>New user? Sign up to create your account.</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#000",
		paddingTop: 100,
		padding: 20
	},
	LogoWrapper: {
		
	},
	Logo: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 30,
		color: "#EFBB0D",
	},
	LogoSubtext: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff"
	},
	Split: {
		marginVertical: 20
	},
	InputWrapper: {
		marginVertical: 10
	},
	InputLabel: {
		color: "#EFBB0D",
		fontWeight: "bold",
		fontSize: 12,
		textAlign: "left"
	},
	Input: {
		height: 40,
		padding: 10,
		marginVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#EFBB0D",
		color: "#fff"
	},
	Button: {
		height: 50,
		padding: 10,
		borderRadius: 25,
		marginVertical: 5,
		backgroundColor: "#EFBB0D"
	},
	ButtonText: {
		paddingTop: 5,
		textAlign: "center",
		color: "#000",
		fontWeight: "bold"
	},
	Redirect: {
		marginTop: 50
	},
	RedirectText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: "bold"
	}
});