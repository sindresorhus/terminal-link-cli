import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['My Website', 'https://sindresorhus.com'], {
		env: {
			FORCE_HYPERLINK: 1
		}
	});
	t.is(stdout, '\u001B]8;;https://sindresorhus.com\u0007My Website\u001B]8;;\u0007');
});
