Install and run tests to see the problem

```
npm install
npm test
```

Sample output

```
typescript-eslint-bug-repro/packages/foo/src/app.ts
   9:7   error  Unsafe assignment of an `any` value                @typescript-eslint/no-unsafe-assignment
  10:30  error  Invalid type "any" of template literal expression  @typescript-eslint/restrict-template-expressions
  10:30  error  Unsafe member access .toFixed on an `any` value    @typescript-eslint/no-unsafe-member-access
  10:30  error  Unsafe call of an `any` typed value                @typescript-eslint/no-unsafe-call

✖ 4 problems (4 errors, 0 warnings)
```

Using same configuration, but single run inference is disabled, lint passes

```
npm run test-without-single-run-inference
```
