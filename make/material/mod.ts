/** @format */
import { fs, spawn } from '../../deps.ts';
import { App, Tab } from '../../essentials/mod.ts';
import { cExecMaterialNavigator } from '../../global/index.ts';

const path: string = Deno.cwd();

const createFolder = async (...args: string[]) => {
	let folders: string;
	try {
		for (folders of args) {
			if (folders === 'navigation') {
				await Deno.mkdir(`${path}/${folders}`);
				await Deno.writeTextFile(`${path}/${folders}/index.ts`, '');
				await Deno.writeTextFile(`${path}/${folders}/Tab.tsx`, Tab(true));
			} else {
				await Deno.mkdir(`${path}/${folders}`);
				await Deno.writeTextFile(`${path}/${folders}/index.ts`, '');
			}
		}
		console.log('Folders created.');
	} catch {
		console.log("Folders Can't be created.");
	}
};

const main = async () => {
	try {
		if (fs.existsSync(`${path}/package.json`)) {
			if (fs.existsSync(`${path}/App.tsx`)) {
				const AppFile: string = await Deno.readTextFile(`${path}/App.tsx`);
				if (AppFile.includes("import { Tab } from './navigation'")) {
					spawn('cmd', cExecMaterialNavigator);
					console.log('Installing Modules');
					createFolder('screen', 'interface', 'constants', 'navigation');
					spawn('econfig');
					spawn('pretty');
				} else {
					await Deno.writeTextFile(`${path}/App.tsx`, App(true));
					main();
				}
			} else {
				await Deno.writeTextFile(`${path}/App.tsx`, App(true));
				main();
			}
		} else {
			console.log(`There isn't any project here.`);
		}
	} catch {
		console.log(`Navigation can't be created.`);
	}
};

export default main;
