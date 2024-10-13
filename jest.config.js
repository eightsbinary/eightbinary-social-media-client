export default {
  transform: { '^.+\\.js$': 'babel-jest' },
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
};
