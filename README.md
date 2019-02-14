# eslint-config
![License](https://img.shields.io/github/license/flowscripter/eslint-config.svg)
![Dependencies](https://img.shields.io/david/flowscripter/eslint-config.svg)

Common ESLint config for all Flowscripter JavaScript projects.

This extensible shared is itself extended from
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
and
[eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
.

## Usage

1. `npx install-peerdeps --dev @flowscripter/eslint-config` 
1. Add `"extends": "@flowscripter/eslint-config"` to your `.eslintrc` file.

## Development

Test: `npm test`

Dogfooding: `npm run lint`

