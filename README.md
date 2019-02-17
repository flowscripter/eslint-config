# eslint-config
[![license](https://img.shields.io/github/license/flowscripter/eslint-config.svg)](https://github.com/flowscripter/eslint-config/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/eslint-config.svg)](https://david-dm.org/flowscripter/eslint-config)
[![travis](https://api.travis-ci.com/flowscripter/eslint-config.svg)](https://travis-ci.com/flowscripter/eslint-config)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=flowscripter_eslint-config&metric=coverage)](https://sonarcloud.io/dashboard?id=flowscripter_eslint-config)
[![npm](https://img.shields.io/npm/v/@flowscripter/eslint-config.svg)](https://www.npmjs.com/settings/flowscripter/eslint-config)

> Common ESLint config for all Flowscripter JavaScript/TypeScript projects.

This extensible shared config is itself extended from
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
,
[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).
and
[@typescript-eslint/recommended](https://www.npmjs.com/package/@typescript-eslint/recommended).

## Usage

1. `npx install-peerdeps --dev @flowscripter/eslint-config` 
1. Add `"extends": "@flowscripter/eslint-config"` to your `.eslintrc` file.

## Development

Test: `npm test`

Dogfooding: `npm run lint`
