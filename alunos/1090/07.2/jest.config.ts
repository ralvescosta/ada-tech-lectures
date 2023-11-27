import { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  transform: {
    '\\.(ts|js)$': 'ts-jest'
  }
}

export default config