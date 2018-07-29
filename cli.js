#!/usr/bin/env node
'use strict';
const process = require('process');
const terminalLink = require('terminal-link');

if (process.argv.length !== 4) {
	process.stderr.write('usage: terminal-link TEXT URL\n');
	process.exit(1);
}

const text = process.argv[2];
const url = process.argv[3];

console.log(terminalLink(text, url));
