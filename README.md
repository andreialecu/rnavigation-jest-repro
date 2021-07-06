```
➜ yarn test
yarn run v1.22.10
warning package.json: No license field
$ jest
 FAIL  src/foo.test.tsx
  ✕ shows bug (112 ms)

  ● shows bug

    Found multiple elements with text: Foo

      17 | test('shows bug', () => {
      18 |   const component = render(<TestComponent />);
    > 19 |   component.getByText('Foo'); // Found multiple elements with text: Foo
         |             ^
      20 | });

      at Object.<anonymous> (src/foo.test.tsx:19:13)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.188 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```