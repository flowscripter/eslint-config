const sonarqubeScanner = require('sonarqube-scanner');

function sonar(callback) {
    sonarqubeScanner(
        {
            options: {
                'sonar.sources': 'src',
                'sonar.tests': 'test',
                'sonar.projectKey': 'flowscripter_eslint-config',
                'sonar.organization': 'flowscripter',
                'sonar.login': process.env.SONAR_TOKEN
            }
        },
        callback
    );
}

exports.sonar = sonar;
