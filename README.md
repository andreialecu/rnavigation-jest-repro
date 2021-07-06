```
➜ yarn test                 
yarn run v1.22.10
warning package.json: No license field
$ jest

ReferenceError: You are trying to `import` a file after the Jest environment has been torn down.

      at Object.get Linking [as Linking] (node_modules/react-native/index.js:241:12)
 PASS  src/foo.test.tsx
  ✓ foo (117 ms)

  console.warn
    Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

      at shouldUseNativeDriver (node_modules/react-native/Libraries/Animated/NativeAnimatedHelper.js:355:15)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.103 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```