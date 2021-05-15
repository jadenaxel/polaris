/** @format */

const main = (material: boolean) => {
	const isMaterial = material ? "import { Tab } from './navigation'" : '';

	return `import 'react-native-gesture-handler';

import React, { FC } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

${isMaterial}

const App: FC = (): JSX.Element => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator>
				<Screen name="${material ? 'Tab' : ''}" component={${material ? 'Tab' : ''}} />
			</Navigator>
		</NavigationContainer>
	)
}

export default App;
`;
};

export default main;
