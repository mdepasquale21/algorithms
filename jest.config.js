module.exports = {
    displayName: 'algorithms',
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