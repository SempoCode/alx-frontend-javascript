# **Promises and Error Handling in JavaScript**

This repository contains JavaScript code examples and projects related to ES6 Promises. The focus is on learning how to work with asynchronous code using Promises, `then()`, `catch()`, `async/await`, error handling with `throw`/`try`, and resolving multiple Promises.

## **Table of Contents**
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Installing NodeJS](#installing-nodejs)
  - [Installing Jest, Babel, and ESLint](#installing-jest-babel-and-eslint)
  - [Configuration Files](#configuration-files)
- [Tasks](#tasks)
  - [Task 0: Keep every promise you make](#task-0-keep-every-promise-you-make)
  - [Task 1: Don't make a promise if you can't keep it](#task-1-dont-make-a-promise-if-you-cant-keep-it)
  - [Task 2: Catch me if you can!](#task-2-catch-me-if-you-can)
  - [Task 3: Handle multiple successful promises](#task-3-handle-multiple-successful-promises)
  - [Task 4: Simple promise](#task-4-simple-promise)
  - [Task 5: Reject the promises](#task-5-reject-the-promises)
  - [Task 6: Handle multiple promises](#task-6-handle-multiple-promises)
  - [Task 7: Load balancer](#task-7-load-balancer)
  - [Task 8: Throw error / try catch](#task-8-throw-error--try-catch)
  - [Task 9: Guardrail mechanism](#task-9-guardrail-mechanism)
- [Testing](#testing)
- [Author](#author)

## **Overview**
This project demonstrates various JavaScript techniques for handling promises and error management. The focus is on understanding how to handle asynchronous code effectively with **promises** and how to manage potential **errors** using `try...catch`. Each task is broken down into its own module, allowing for isolated testing and comprehension.

## **Prerequisites**
To run and test the project, ensure you have the following installed:
- **Node.js** (version 12.11.x)
- **npm** (version 6.11.x)
- **Jest** for testing

## **Setup**

Follow the steps below to set up the project:

### Installing NodeJS
1. Install Node.js 12.x using the following commands:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs
   ```

2. Verify the installation:
   ```bash
   nodejs -v  # Should output v12.11.x
   npm -v     # Should output v6.11.x
   ```

### Installing Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the `package.json` provided:

1. Run `npm install` to install the necessary dependencies.

```bash
npm install
```

### Configuration Files

The following configuration files should be added to your project directory:

#### `package.json`
This file contains all the dependencies and scripts for Jest, Babel, and ESLint:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`
This configuration file sets up Babel for transpiling modern JavaScript to be compatible with Node.js.

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `utils.js`
This file contains two functions, `uploadPhoto` and `createUser`, which return Promises and are used in various tasks.

```javascript
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

#### `.eslintrc.js`
This ESLint configuration follows the Airbnb style guide and includes Jest-specific settings.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## **Tasks**

### Task 0: Keep every promise you make
- **File**: `0-promise.js`
- **Description**: Implements a simple promise that resolves successfully.
- **Usage**:
  ```javascript
  import getResponseFromAPI from './0-promise.js';
  const response = getResponseFromAPI();
  console.log(response instanceof Promise);  // Should log: true
  ```

### Task 1: Don't make a promise if you can't keep it
- **File**: `1-promise.js`
- **Description**: Returns a promise that resolves or rejects based on a boolean input.
- **Usage**:
  ```javascript
  import getFullResponseFromAPI from './1-promise.js';
  getFullResponseFromAPI(true).then(console.log).catch(console.error);
  ```

### Task 2: Catch me if you can!
- **File**: `2-then.js`
- **Description**: Handles promise resolution and rejection with `.then()`, `.catch()`, and `.finally()`.
- **Usage**:
  ```javascript
  import handleResponseFromAPI from './2-then.js';
  const promise = Promise.resolve();
  handleResponseFromAPI(promise);
  ```

### Task 3: Handle multiple successful promises
- **File**: `3-all.js`
- **Description**: Resolves multiple promises using `Promise.all` and logs the combined results.
- **Usage**:
  ```javascript
  import handleProfileSignup from './3-all.js';
  handleProfileSignup();
  ```

### Task 4: Simple promise
- **File**: `4-user-promise.js`
- **Description**: Returns a promise that resolves with user data (first name and last name).
- **Usage**:
  ```javascript
  import signUpUser from './4-user-promise.js';
  console.log(signUpUser('John', 'Doe'));
  ```

### Task 5: Reject the promises
- **File**: `5-photo-reject.js`
- **Description**: Returns a rejected promise with an error message if a file cannot be processed.
- **Usage**:
  ```javascript
  import uploadPhoto from './5-photo-reject.js';
  uploadPhoto('test.jpg').catch(console.error);
  ```

### Task 6: Handle multiple promises
- **File**: `6-final-user.js`
- **Description**: Handles multiple promises with `Promise.allSettled` and returns the result of both successful and failed promises.
- **Usage**:
  ```javascript
  import handleProfileSignup from './6-final-user.js';
  handleProfileSignup('John', 'Doe', 'test.jpg').then(console.log);
  ```

### Task 7: Load balancer
- **File**: `7-load_balancer.js`
- **Description**: Returns the result of the fastest promise using `Promise.race`.
- **Usage**:
  ```javascript
  import loadBalancer from './7-load_balancer.js';
  loadBalancer(promise1, promise2).then(console.log);
  ```

### Task 8: Throw error / try catch
- **File**: `8-try.js`
- **Description**: Throws an error when attempting to divide by zero, handled using `try...catch`.
- **Usage**:
  ```javascript
  import divideFunction from './8-try.js';
  console.log(divideFunction(10, 0));  // Throws error
  ```

### Task 9: Guardrail mechanism
- **File**: `9-try.js`
- **Description**: Provides a guardrail mechanism that logs results, catches errors, and appends a guardrail message.
- **Usage**:
  ```javascript
  import guardrail from './9-try.js';
  console.log(guardrail(() => divideFunction(10, 0)));
  ```

## **Testing**

Run the provided test cases using **Jest**. You can execute the tests by running:
```bash
npm run test
```

This command will run all test cases and display the results, allowing you to verify the functionality of the project.

## **Author**
Created by Ssempebwa Paul – A project demonstrating JavaScript promises and error handling techniques.

