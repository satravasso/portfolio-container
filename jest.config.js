module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/mocks/styleMock.ts',
    '\\.(css|less)$': '<rootDir>/src/utils/mocks/styleMock.ts'
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts', 'jest-canvas-mock'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['/!node_modules/flexboxgrid/']
}
