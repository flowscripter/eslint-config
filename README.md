# eslint-config
[![license](https://img.shields.io/github/license/flowscripter/eslint-config.svg)](https://github.com/flowscripter/eslint-config/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/eslint-config.svg)](https://david-dm.org/flowscripter/eslint-config)
[![travis](https://api.travis-ci.com/flowscripter/eslint-config.svg)](https://travis-ci.com/flowscripter/eslint-config)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=flowscripter_eslint-config&metric=coverage)](https://sonarcloud.io/dashboard?id=flowscripter_eslint-config)
[![npm](https://img.shields.io/npm/v/@flowscripter/eslint-config.svg)](https://www.npmjs.com/package/@flowscripter/eslint-config)

> Common [ESLint config](https://eslint.org/docs/user-guide/configuring) for Flowscripter TypeScript projects.

This extensible shared config is itself extended from:

* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
* [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest).
* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

## Install

```
npx install-peerdeps --dev @flowscripter/eslint-config
``` 

## Usage

Add `extends: '@flowscripter/eslint-config'` to your `.eslintrc.js` file.

## Build

Test: `npm test`

Dogfooding: `npm run lint`

## License

MIT © Vectronic
