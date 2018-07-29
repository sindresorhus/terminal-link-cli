import {execSync} from 'child_process';
import test from 'ava';

test('main', t => {
	const output = execSync('./cli.js "My Website" "https://sindresorhus.com"');
	t.is(output.toString(), '\u001B]8;;https://sindresorhus.com\u0007My Website\u001B]8;;\u0007\n');
});
