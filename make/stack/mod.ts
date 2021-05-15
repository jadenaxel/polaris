/** @format */
import { fs, spawn } from '../../deps.ts';
import { App, Stack } from '../../essentials/mod.ts';
import tempFile from '../../name.ts';

const path: string = Deno.cwd();

const createFolder = async (...args: string[]) => {
	let folders: string;
	try {
		for (folders of args) {
			await Deno.mkdir(`${path}/${folders}`);
			await Deno.writeTextFile(`${path}/${folders}/index.ts`, '');
		}
		console.log('Folders created.');
	} catch (error) {
		console.log("Folders Can't be created.");
	}
};

const main = async () => {
	try {
		if (fs.existsSync(`${path}/package.json`)) {
			if (fs.existsSync(`${path}/App.tsx`)) {
				const AppFile: string = await Deno.readTextFile(`${path}/App.tsx`);
				if (AppFile.includes("import 'react-native-gesture-handler'")) {
					await Deno.writeTextFile(`${path}/${tempFile}`, Stack);
					const dependencies: any = spawn('node', [`${tempFile}`]);
					console.log('Installing Modules');
					dependencies.stdout.on('data', (data: any) => {
						console.log(`${data}`);
						createFolder('screen', 'interface', 'constants');
						spawn('econfig');
						spawn('pretty');
					});
					dependencies.stderr.on('data', (data: any) => {
						console.log(`${data}`);
					});
					dependencies.on('close', async (data: any) => {
						await Deno.remove(`${path}/${tempFile}`);
					});
				} else {
					await Deno.writeTextFile(`${path}/App.tsx`, App(false));
					main();
				}
			} else {
				await Deno.writeTextFile(`${path}/App.tsx`, App(false));
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
