const sonarqubeScanner = require('sonarqube-scanner');

function sonar(callback) {
    sonarqubeScanner(
        {
            serverUrl: 'https://sonarcloud.io',
            token: process.env.SONAR_TOKEN,
            options: {
                'sonar.sources': 'src',
                'sonar.tests': 'test',
                'sonar.projectKey': 'flowscripter_eslint-config',
                'sonar.organization': 'flowscripter',
            }
        },
        callback
    );
}

exports.sonar = sonar;
