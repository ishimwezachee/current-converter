import React from 'react';
import { SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

export default () => {
	return (
		<SafeAreaView>
			<RowItem
				text="Themes"
				onPress={() => alert('tod!')}
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
		</SafeAreaView>
	);
};
