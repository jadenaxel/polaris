/** @format */

const names = 'abcdefghijklmnopqrstuvwxyz';

let getName = '';
let i;

for (i of names) {
	const news = Math.floor(Math.random() * names.length);
	getName += names[news];
}

const finalName = `${getName}.js`;
export default finalName;
