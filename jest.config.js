module.exports = {
  // resolver: 'jest-webpack-resolver',
  globals: {
    mockResponseJson: () => false
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  modulePaths: [
    'mock',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'file.js',
    '\\.(css|sass)$': 'style.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/mock/globals.js',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};
