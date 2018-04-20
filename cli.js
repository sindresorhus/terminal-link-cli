#!/usr/bin/env node
'use strict';
const meow = require('meow');
const terminalLink = require('terminal-link');

const cli = meow(`
	Usage
	  $ terminal-link <text> <url>

	Example
	  $ terminal-link 'My Website' 'https://sindresorhus.com'
`);

const [text, url] = cli.input;

console.log(terminalLink(text, url));
