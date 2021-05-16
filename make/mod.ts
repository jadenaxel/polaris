/** @format */

import stack from './stack/mod.ts';
import material from './material/mod.ts';
import bottom from './bottom/mod.ts';

const make = (subCommand: string, type?: string) => {
	const makeType: string | null = type !== undefined ? type : null;
	const controller: string = subCommand.split(':')[1];

	switch (makeType) {
		case null:
			stack();
			break;
		case 'material':
			material();
			break;
		case 'bottom':
			bottom();
			break;
		default:
			console.log(`Controller '${controller}' doesn't exists.`);
			break;
	}
};
export default make;
