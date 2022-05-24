const del = require('del');

function clean() {
    return del([
        '**/*.js',
        '**/*.js.*',
        '*.tsbuildinfo',
        '!node_modules',
        '!clean.js',
        '!jest.config.js',
        '!spec/support/specs.js',
        'generated-assets/**/*.*'
    ]);
}

clean();
