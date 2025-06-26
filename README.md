# StashMate

A web app to manage my sewing patterns and fabrics

## Tech stack

- client: angular app hosted on netlify
- proxy server: aws api gateway + lambda function
- backend: airtable

## Todos

- [x] proxy server
- [x] filter patterns by type
- [x] filter fabrics by type
- [x] filter fabrics by color
- [ ] icons for pattern types
- [ ] categorize fabrics by thrifted vs new
- [ ] app theme / color palette
- [ ] enhance layout
- [ ] add missing data
- [ ] image optimizations

## stretch goals
- [ ] create svgs for all patterns
- [ ] add pattern ratings
- [ ] projects feature
- [ ] more sophisticated matching via fabric weight
- [ ] form to add new patterns / fabrics

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
