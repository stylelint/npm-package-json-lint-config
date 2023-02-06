'use strict';

const npmpackagejsonlintConfig = require('./npm-package-json-lint-config');

function isObject(value) {
	return typeof value === 'object' && value !== null;
}

describe('npm-package-json-lint config tests', () => {
	describe('npm-package-json-lint config object', () => {
		test('should be an object', () => {
			expect(isObject(npmpackagejsonlintConfig)).toBe(true);
		});
	});

	describe('extends', () => {
		test('should not be an object', () => {
			expect(isObject(npmpackagejsonlintConfig.extends)).toBe(false);
		});
	});

	describe('rules', () => {
		test('should be an object', () => {
			expect(isObject(npmpackagejsonlintConfig.rules)).toBe(true);
		});
	});
});
