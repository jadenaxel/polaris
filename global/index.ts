/** @format */

const cmd: string[] = ['/d', '/s', '/c'];

const cExecStackNavigator: string[] = [
	...cmd,
	'yarn',
	'add',
	'@react-navigation/native',
	'@react-navigation/stack',
	'react-native-reanimated',
	'react-native-gesture-handler',
	'react-native-screens',
	'react-native-safe-area-context',
	'@react-native-community/masked-view',
	'@expo/vector-icons',
];

const cExecMaterialNavigator: string[] = [
	...cmd,
	'yarn',
	'add',
	'@react-navigation/native',
	'@react-navigation/stack',
	'react-native-reanimated',
	'react-native-gesture-handler',
	'react-native-screens',
	'react-native-safe-area-context',
	'@react-native-community/masked-view',
	'@expo/vector-icons',
	'@react-navigation/material-bottom-tabs',
	'react-native-paper',
];

const cExecBottomNavigator: string[] = [
	...cmd,
	'yarn',
	'add',
	'@react-navigation/native',
	'@react-navigation/stack',
	'react-native-reanimated',
	'react-native-gesture-handler',
	'react-native-screens',
	'react-native-safe-area-context',
	'@react-native-community/masked-view',
	'@expo/vector-icons',
	'@react-navigation/bottom-tabs',
];

export { cExecStackNavigator, cExecMaterialNavigator, cExecBottomNavigator };
