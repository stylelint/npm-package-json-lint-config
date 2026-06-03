import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

import npmpackagejsonlintConfig from './npm-package-json-lint-config.js';

function isObject(value) {
	return typeof value === 'object' && value !== null;
}

describe('npm-package-json-lint config tests', () => {
	describe('npm-package-json-lint config object', () => {
		test('should be an object', () => {
			assert.ok(isObject(npmpackagejsonlintConfig));
		});
	});

	describe('extends', () => {
		test('should not be an object', () => {
			assert.ok(!isObject(npmpackagejsonlintConfig.extends));
		});
	});

	describe('rules', () => {
		test('should be an object', () => {
			assert.ok(isObject(npmpackagejsonlintConfig.rules));
		});
	});
});
