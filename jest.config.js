module.exports = {
  // resolver: 'jest-webpack-resolver',
  globals: {
    io: () => null
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  modulePaths: [
    'mock',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'fileMock.js',
    '\\.(css|sass)$': 'styleMock.js'
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};
