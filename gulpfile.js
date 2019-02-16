const sonarqubeScanner = require('sonarqube-scanner');

function sonar(callback) {
    sonarqubeScanner(
        {
            options: {
                'sonar.sources': 'src',
                'sonar.tests': 'test',
                'sonar.projectKey': 'flowscripter_eslint-config',
                'sonar.links.homepage': 'https://www.npmjs.com/package/@flowscripter/eslint-config',
                'sonar.links.ci': 'https://travis-ci.com/flowscripter/eslint-config',
                'sonar.links.scm': 'https://github.com/flowscripter/eslint-config',
                'sonar.links.issue': 'https://github.com/flowscripter/eslint-config/issues',
                'sonar.javascript.lcov.reportPaths': 'reports/lcov.info',
                'sonar.eslint.reportPaths': 'reports/eslint.json'
            }
        },
        callback
    );
}

exports.sonar = sonar;
