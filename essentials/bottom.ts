/** @format */
export default `const { exec } = require("child_process");

exec(\`yarn add @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @expo/vector-icons @react-navigation/bottom-tabs \`, (a, b, c) => {
	if (a) console.log("Modules can't be installed.");
	console.log("Modules installed.");
})
`;
