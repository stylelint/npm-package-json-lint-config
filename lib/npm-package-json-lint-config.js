'use strict';

module.exports = {
	// See https://www.npmjs.com/package/npm-package-json-lint-config-default
	extends: 'npm-package-json-lint-config-default',
	rules: {
		'description-format': ['error', { requireCapitalFirstLetter: true, requireEndingPeriod: true }],
		'no-duplicate-properties': 'error',
		'no-file-dependencies': 'error',
		'no-file-devDependencies': 'error',
		'no-git-dependencies': 'error',
		'no-git-devDependencies': 'error',
		'prefer-no-engineStrict': 'error',
		'require-author': 'error',
		'require-description': 'error',
		'require-engines': 'error',
		'require-funding': 'error',
		'require-keywords': 'error',
		'require-license': 'error',
		'require-main': 'error',
		'require-name': 'error',
		'require-repository': 'error',
		'require-scripts': 'error',
		'require-version': 'error',
		'valid-values-author': ['error', ['stylelint']],
		'valid-values-license': ['error', ['MIT']],
		'valid-values-publishConfig': ['error', [{ access: 'public' }]],
	},
};
