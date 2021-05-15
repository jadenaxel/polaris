/** @format */
import Expo from './expo.ts';
import make from './make/mod.ts';

const main = (params: string[]): void => {
	const commandNew: string = params[0];
	try {
		if (params.length > 0) {
			if (commandNew === 'new') {
				const name: string = params[1];
				const posibleName = /^[A-Za-z]+[A-Za-z0-9_-]+$/g;
				if (posibleName.test(name) && (name?.length > 0 || name !== undefined)) {
					new Expo(name);
				} else throw new Error('Error: Name invalid.');
			} else if (commandNew.toLowerCase().includes('make')) {
				make(commandNew.toLowerCase(), params[1]);
			} else if (commandNew.toLowerCase() === '--help' || commandNew.toLowerCase() === '-h') {
				// helps();
			} else console.log('Use --help or -h to see the list of commands.');
		} else console.log('Use --help or -h to see the list of commands.');
	} catch (error) {
		console.log(error ? error.message : 'Error');
	}
};

main(Deno.args);
