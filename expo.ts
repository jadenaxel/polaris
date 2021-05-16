/** @format */

import { fs, spawn } from './deps.ts';
import tempFile from './helpers/name.ts';
import execE from './essentials/expo_exec.ts';

export default class Expo {
	protected currentDir: string = Deno.cwd();
	private name: string;
	private execE: string;

	constructor(name: string) {
		this.name = name;
		this.execE = execE(this.name);
		this.createProject();
	}

	async createProject() {
		try {
			if (
				!fs.existsSync(`${this.currentDir}/${tempFile}`) &&
				!fs.existsSync(`${this.currentDir}/${this.name}`)
			) {
				await Deno.writeTextFile(`${this.currentDir}/${tempFile}`, this.execE);
				console.log('Creating the project.');
				const install: any = spawn('node', [`${tempFile}`]);
				install.stdout.on('data', (data: string) => {
					console.log(`${data}`);
				});
				install.stderr.on('data', (data: string) => {
					console.log(`${data}`);
				});
				install.on('close', async () => {
					try {
						await Deno.remove(`${this.currentDir}/${tempFile}`);
					} catch {
						null;
					}
				});
			}
		} catch (error) {
			console.log(error ? error.message : 'Error.');
		}
	}
}
