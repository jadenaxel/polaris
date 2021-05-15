/** @format */

const main = (isMaterial: boolean) => {
	const importMaterial = isMaterial
		? "import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';"
		: "import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';";
	const classsMaterial = isMaterial
		? 'createMaterialBottomTabNavigator();'
		: 'createBottomTabNavigator();';

	return `/** @format */

import React, { FC } from 'react';

${importMaterial}
import { Ionicons } from '@expo/vector-icons';

const Tab: FC = () => {
	const { Navigator, Screen } = ${classsMaterial}

	return (
		<Navigator ${isMaterial ? 'sceneAnimationEnabled={true}' : ''}>
			<Screen
				name=""
				component={}
				options={{
					tabBarIcon: ({ focused }): JSX.Element => ();
				}}
			/>
		</Navigator>
	);
};
export default Tab;`;
};

export default main;
