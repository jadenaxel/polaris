/** @format */

import { fs, spawn } from './deps.ts';

export default class Expo {
	protected currentDir: string = Deno.cwd();
	private name: string;

	constructor(name: string) {
		this.name = name;
		this.createProject();
	}

	createProject() {
		try {
			if (!fs.existsSync(`${this.currentDir}/${this.name}`)) {
				console.log('Creating the project.');
				spawn('cmd', [
					'/d',
					'/s',
					'/c',
					'expo',
					'init',
					'-t',
					'expo-template-blank-typescript',
					`${this.name}`,
				]);
			}
		} catch (error) {
			console.log(error ? error.message : 'Error.');
		}
	}
}
