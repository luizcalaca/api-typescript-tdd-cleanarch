export default {
  roots: ['<rootDir>/src'],
  collectCoverage: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
