import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/db/**/*.ts",
    "!<rootDir>/src/repositories/**.ts",
    "!<rootDir>/src/controllers/interfaces.ts",
    "!<rootDir>/src/controllers/models.ts",
    "!<rootDir>/src/main.ts",
    "!<rootDir>/src/routes.ts",
  ],
};

export default config;