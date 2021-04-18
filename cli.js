#!/usr/bin/env node
import meow from 'meow';
import terminalLink from 'terminal-link';

const cli = meow(`
	Usage
	  $ terminal-link <text> <url>

	Example
	  $ terminal-link 'My Website' 'https://sindresorhus.com'
`);

const [text, url] = cli.input;

console.log(terminalLink(text, url));
