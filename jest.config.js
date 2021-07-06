
const dontTransform = [
  // '@react-native',
];

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  transformIgnorePatterns: [`node_modules/(?!(${dontTransform.join('|')}))`],
  testPathIgnorePatterns: ['./node_modules/']
};
