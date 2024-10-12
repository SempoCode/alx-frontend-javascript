# TypeScript Project

This project demonstrates the use of TypeScript features such as interfaces, classes, DOM manipulation, generic types, namespaces, and ambient namespaces. It also incorporates Jest for testing and Webpack for bundling.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
  - [Interfaces](#interfaces)
  - [Classes](#classes)
  - [DOM Manipulation](#dom-manipulation)
  - [Generic Types](#generic-types)
  - [Namespaces](#namespaces)
  - [Ambient Namespaces](#ambient-namespaces)
- [Testing](#testing)
- [Building and Running](#building-and-running)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies

### Setup
Clone this repository and navigate to the project directory:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install the necessary dependencies:

npm install

Compiling TypeScript

To compile the TypeScript code, run:

npm run build

Features

Interfaces

The project defines interfaces to enforce structure and type checking for objects and classes.

interface User {
    id: number;
    name: string;
    email: string;
}

Classes

The project demonstrates the use of classes, including the implementation of interfaces and object-oriented principles like inheritance.

class Person implements User {
    id: number;
    name: string;
    email: string;
    
    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

DOM Manipulation

Type-safe DOM manipulation is handled using TypeScript’s types for elements.

const button = document.getElementById('myButton') as HTMLButtonElement;

button.addEventListener('click', () => {
    alert('Button clicked!');
});

Generic Types

The project uses generic types to allow flexibility while maintaining type safety.

function identity<T>(arg: T): T {
    return arg;
}

const numberIdentity = identity<number>(5);

Namespaces

Namespaces are used to organize code and prevent global scope pollution.

namespace Utils {
    export function logMessage(message: string): void {
        console.log(message);
    }
}

Ambient Namespaces

Ambient namespaces are used to declare types for third-party libraries that are not written in TypeScript.

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

Testing

The project uses Jest for unit testing. Tests are defined in the __tests__ folder, and the following script runs the tests:

npm test

A simple test example for the identity function:

import { identity } from './path/to/your/file';

test('identity function returns the input value', () => {
    const result = identity<string>('test');
    expect(result).toBe('test');
});

Building and Running

This project uses Webpack to bundle the TypeScript code. To build the project, use:

npm run build

The bundled files will be output to the dist folder.

To run the project locally, you can set up a simple server (e.g., using http-server).

npx http-server ./dist

Visit http://localhost:8080 to view the app in your browser.

Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.


2. Create a feature branch (git checkout -b feature/your-feature).


3. Commit your changes (git commit -m 'Add feature').


4. Push to the branch (git push origin feature/your-feature).


5. Create a Pull Request.



License

This project is licensed under the MIT License. See the LICENSE file for more information.

### Key Details:
- **Installation**: Instructions to set up the project, install dependencies, and compile TypeScript.
- **Features**: Description and code samples for each TypeScript feature you are working on.
- **Testing**: Provides information on how to run tests using Jest.
- **Building and Running**: How to build the project using Webpack and run it locally.
- **Contributing**: Information on how others can contribute to the project.
- **License**: SempoCode
