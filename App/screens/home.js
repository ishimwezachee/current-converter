import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from 'react-native';
import { format } from 'date-fns';
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
	},
	textHeader: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 20,
		textAlign: 'center'
	},
	text: {
		color: colors.white,
		fontSize: 13,
		textAlign: 'center'
	}
});

export default () => {
	const baseCurrency = 'USD';
	const quoteCurrency = 'GBP';
	const conversionRate = '0.8345';
	const date = new Date();
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
			<Text style={styles.textHeader}> Curreny converter</Text>
			<ConversionInput
				text={baseCurrency}
				value="123"
				onButtonPress={() => alert('todo!')}
				onChangeText={(text) => console.log(text)}
				keyboardType="numeric"
			/>
			<ConversionInput text="GDP" value="123" onButtonPress={() => alert('todo!')} editable={false} />
			<Text style={styles.text}>
				{`1 ${baseCurrency}= ${conversionRate} ${quoteCurrency} as of ${format(date, 'MMM do,yyy')}`}
			</Text>
		</View>
	);
};
