module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        ecmaVersion: 6
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended'
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.ts']
            }
        }
    },
    rules: {
        'padded-blocks': 'off',
        'comma-dangle': 'off',
        indent: [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [
            'error',
            {
                code: 120,
                comments: 120
            }
        ],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        // note you must disable the base rule as it can report incorrect errors
        semi: 'off',
        '@typescript-eslint/semi': ['error'],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            ts: 'never'
        }]
    },
    overrides: [
        {
            files: [
                '**/*.test.js',
                '**/*.test.ts'
            ],
            env: {
                jest: true
            },
            plugins: [
                'jest'
            ],
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
                '@typescript-eslint/explicit-function-return-type': 'off'
            }
        }
    ]
};
