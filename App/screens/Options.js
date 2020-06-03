import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openUrl = (url) => {
	return Linking.openURL(url).catch(() => {
		Alert.alert('Sorry, something went wrong. Please try agin later.');
	});
};

export default () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<RowItem
					text="Themes"
					onPress={() =>
						openUrl(
							'httpsafffffffffffffffqef://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter'
						)}
					rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
				/>

				<RowSeparator />

				<RowItem
					text="React Native Basics"
					onPress={() => alert('tod!')}
					rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
				/>

				<RowSeparator />

				<RowItem
					text="React Native by example"
					onPress={() => alert('tod!')}
					rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};
