# eslint-config
[![License](https://img.shields.io/github/license/flowscripter/eslint-config.svg)](https://github.com/flowscripter/eslint-config/blob/master/LICENSE.md)
[![Dependencies](https://img.shields.io/david/flowscripter/eslint-config.svg)](https://david-dm.org/flowscripter/eslint-config)
[![Travis](https://api.travis-ci.com/flowscripter/eslint-config.svg)](https://travis-ci.com/flowscripter/eslint-config)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=flowscripter_eslint-config&metric=coverage)](https://sonarcloud.io/dashboard?id=flowscripter_eslint-config)
[![npm](https://img.shields.io/npm/v/flowscripter/eslint-config.svg)](https://www.npmjs.com/settings/flowscripter/eslint-config)

Common ESLint config for all Flowscripter JavaScript projects.

This extensible shared config is itself extended from
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
and
[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).

## Usage

1. `npx install-peerdeps --dev @flowscripter/eslint-config` 
1. Add `"extends": "@flowscripter/eslint-config"` to your `.eslintrc` file.

## Development

Test: `npm test`

Dogfooding: `npm run lint`

