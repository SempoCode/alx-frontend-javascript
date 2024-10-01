# **Promises and Error Handling in JavaScript**

## **Table of Contents**
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
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

### Install Node.js and npm

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

### Install Dependencies

To install the required dependencies for the project:
```bash
npm install
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

