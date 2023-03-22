import { pathsToModuleNameMapper } from 'ts-jest';
import tsConfig from './tsconfig.json' assert { type: 'json' };

const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
        prefix: '<rootDir>/',
      },
    ),
    '^uuid$': 'uuid',
  },
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/features/**/*.{ts,tsx}',
    '!src/features/**/styled.ts',
    '!src/**/index.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};

export default jestConfig;
