#!/usr/bin/env node
'use strict';
const process = require('process');

if (process.argv.length !== 4) {
	process.stderr.write('usage: terminal-link TEXT URL\n');
	process.exit(1);
}

process.stdout.write('\u001B]8;;' + process.argv[3] + '\u0007' +
	process.argv[2] + '\u001B]8;;\u0007\n');
