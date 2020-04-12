'use strict';

const isPlainObj = require('is-plain-obj');
const npmpackagejsonlintConfig = require('./npm-package-json-lint-config');

describe('npm-package-json-lint config tests', () => {
	describe('npm-package-json-lint config object', () => {
		test('should be an object', () => {
			expect(isPlainObj(npmpackagejsonlintConfig)).toBe(true);
		});
	});

	describe('extends', () => {
		test('should not be an object', () => {
			expect(isPlainObj(npmpackagejsonlintConfig.extends)).toBe(false);
		});
	});

	describe('rules', () => {
		test('should be an object', () => {
			expect(isPlainObj(npmpackagejsonlintConfig.rules)).toBe(true);
		});
	});
});
