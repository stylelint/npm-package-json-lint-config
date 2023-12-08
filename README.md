# @stylelint/npm-package-json-lint-config

[![NPM version](https://img.shields.io/npm/v/@stylelint/npm-package-json-lint-config.svg)](https://www.npmjs.org/package/@stylelint/npm-package-json-lint-config)
[![CI](https://github.com/stylelint/npm-package-json-lint-config/actions/workflows/nodejs.yml/badge.svg)](https://github.com/stylelint/npm-package-json-lint-config/actions/workflows/nodejs.yml)

> Stylelint org's shareable config for [npm-package-json-lint](https://npmpackagejsonlint.org/).

For consistent `package.json` files across Stylelint org repos.

## Installation

```shell
npm install @stylelint/npm-package-json-lint-config --save-dev
```

## Usage

Add this to your `package.json`:

```json
{
  "npmpackagejsonlint": {
    "extends": "@stylelint/npm-package-json-lint-config"
  }
}
```

If you prefer, add this too:

```json
{
  "scripts": {
    "lint:packagejson": "npmPkgJsonLint ."
  }
}
```

## [Changelog](CHANGELOG.md)
