/** @format */

const names = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

let getName = '';

for (let i = 0; i <= 10; i++) {
	const news = Math.floor(Math.random() * names.length);
	getName += names[news];
}

const finalName = `${getName}.js`;

console.log(finalName);

export default finalName;
