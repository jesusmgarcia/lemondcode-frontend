module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleNameMapper: {
    "^common/(.*)": "<rootDir>/src/common/$1",
    "^common-app/(.*)": "<rootDir>/src/common-app/$1",
    "^core/(.*)": "<rootDir>/src/core/$1",
    "^layouts/(.*)": "<rootDir>/src/layouts/$1",
    "^pods/(.*)": "<rootDir>/src/pods/$1",
    "^scenes/(.*)": "<rootDir>/src/scenes/$1",


  }
};