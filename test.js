#!/usr/bin/env node

const {execSync} = require('child_process');
const assert = require('assert');

assert.strictEqual(
	execSync('./cli.js "My Website" "https://sindresorhus.com"').toString(),
	'\u001B]8;;https://sindresorhus.com\u0007My Website\u001B]8;;\u0007\n');
