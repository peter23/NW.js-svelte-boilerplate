
const child_process = require('child_process');
const fs = require('fs');
const process = require('process');

const cwd = process.cwd();

const dirs = fs.readdirSync('dist');

if(dirs) {
	for(var dir of dirs) {
		process.chdir('dist/'+dir);

		var s = fs.readFileSync('package.json', {encoding: 'utf8'});
		s = s.replace(/http:\/\/localhost:8080\//, 'app/index.html');
		fs.writeFileSync('package.json', s);

		process.chdir(cwd);
	}
}
