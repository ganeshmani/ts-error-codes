# Contributing

Thanks for taking the time to contribute! :tada: :confetti_ball: :+1:

## Getting started

Looking for places to contribute to the codebase?

### Installation

First, ensure you have Node v10+ and the latest [npm](https://www.npmjs.com/) installed on your machine.

As an external contributor, you will have to fork Blueprint in order to contribute code.
Clone your fork onto your machine and then run the following commands to install dependencies:

```sh
git clone git@github.com:<username>/ts-error-codes.git # using ssh
cd ts-error-codes
npm install
```

## Developing

A typical contributor workflow looks like this:

1. Create a new feature branch. We use a format like `[your-initials]/[short-name]`:
   `feat/ts-1002`.
2. Run `npm run dev` in the root to watch all the code and run the dev app at http://localhost:3000
3. Write some code. :hammer: **Refer to the wiki in this repo for detailed instructions on:**
4. Ensure your code **compiles properly** and is **tested**, **linted**, and **formatted**.
   - Run `npm run build` at the repo root to build.
   - Linting is best handled by your editor for real-time feedback. Run
     `npm run lint` to be 100% safe.
   - TypeScript lint errors can often be automatically fixed by ESLint. Run lint fixes with `npm run lint-fix`.
   - Code formatting is enforced using [Prettier](https://prettier.io/). These errors can be fixed in your editor
     through ESLint (make sure you have set up the editor integrations linked above).
     **Formatting checks will not run** during the `npm run lint` package script.
     Instead, when using the CLI or in a CI environment, you should run the `npm run format` script to fix all
     formatting issues across the Blueprint monorepo.
5. Submit a Pull Request on GitHub and fill out the template.
6. Team members will review your code and merge it after approvals.
   - You may be asked to make modifications to code style or to fix bugs you may have not noticed.
   - Please respond to comments in a timely fashion (even if to tell us you need more time).
   - _Do not_ amend commits and `push --force` as they break the PR history. Please add more commits; we squash each PR to a single commit on merge.
7. Hooray, you contributed! :tophat:
