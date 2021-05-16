/** @format */

const main = (name: string) => `const { exec } = require("child_process");

exec(\`expo init -t expo-template-blank-typescript ${name}\`, (a, b, c) => {
	if (a) console.log("Project can't be created.");
	console.log("Project Created.");
})`;

export default main;
