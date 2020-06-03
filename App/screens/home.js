import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blue,
		flex: 1,
		justifyContent: 'center'
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	logBackground: {
		width: screen.width * 0.45,
		height: screen.width * 0.45
	},
	logo: {
		position: 'absolute',
		width: screen.width * 0.25,
		height: screen.width * 0.25
	}
});

export default () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor={colors.blue} />

			<View style={styles.logoContainer}>
				<Image
					source={require('../assets/images/background.png')}
					style={styles.logBackground}
					resizeMode="contain"
				/>
				<Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
			</View>
			<ConversionInput
				text="USD"
				value="123"
				onButtonPress={() => alert('todo!')}
				onChangeText={(text) => console.log(text)}
				keyboardType="numeric"
			/>
			<ConversionInput text="GDP" value="123" onButtonPress={() => alert('todo!')} />
		</View>
	);
};
