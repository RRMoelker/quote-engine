Example VueJS web application to fetch random quotes from related quote web server.


# Design decisions

* The focus of this project is on the backend so the webapp is very simple:
no CSS library/framework, no fancy state management, no routing, etc. 
* Started with general VueJS app by running create and using TypeScript, linting and E2E testing.
* Slightly modified HelloWorld example to show list of quotes


# Install

Copy the example env:

    cp .env.example .env

Install npm dependencies

    npm install


# Run

Start the dev server and open [localhost:5173](http://localhost:5173/):

    npm run dev


# Testing

Run unit tests:

    npm run test:unit

Run Cypress E2E tests by starting Cypress with:

    npm run test:e2e:dev

And selecting specs to test in the UI.

# Linting

Type checking:

    npm run type-check

Pretty formatting:

    npm run format

Linting:

    npm run lint




# Original Readme from npm create vue@latest

# quote-client

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
