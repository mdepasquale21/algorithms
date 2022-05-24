module.exports = {
    displayName: 'ddd',
    preset: 'ts-jest',
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json',
            isolatedModules: true
        },
    },
    clearMocks: true,
}