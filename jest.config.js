module.exports = {
    moduleFileExtensions: [
        'js'
    ],
    testEnvironment: 'node',
    testMatch: [
        '**/?(*.)test.js'
    ],
    coverageReporters: [
        'lcov'
    ],
    collectCoverageFrom: [
        'src/*.js'
    ],
    coverageDirectory: 'reports'
};
