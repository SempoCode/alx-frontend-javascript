0x02. ES6 Classes

Project Overview

This project focuses on understanding and implementing key Object-Oriented Programming (OOP) concepts in JavaScript using ES6 classes. The tasks involve defining and manipulating classes, static methods, inheritance, getters and setters, as well as metaprogramming techniques like using symbols.

Throughout this project, the code will be written in JavaScript and tested using Jest. You are expected to gain a solid understanding of OOP principles and be able to confidently explain these concepts to others.

Learning Objectives

By the end of this project, you should be able to:

Define a class and its constructor in ES6

Add methods and static methods to a class

Extend classes and understand inheritance in JavaScript

Utilize metaprogramming techniques such as symbols

Implement and use getters and setters for class attributes


Project Requirements

Environment: Ubuntu 18.04 LTS, NodeJS 12.11.x

Editors: vi, vim, emacs, Visual Studio Code

Testing: Jest

Linting: ESLint, Airbnb style guide

Code Extension: .js

All files must end with a new line


Ensure to install the required packages with the npm install command after setting up the provided configuration files (i.e., package.json, babel.config.js, and .eslintrc.js).

Setup Instructions

1. Install NodeJS 12.11.x:



curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should print v12.11.1
npm -v  # should print 6.11.3

2. Install Jest, Babel, and ESLint:

Use the provided package.json file and run:




npm install

Tasks

0. You used to attend a place like this at some point

Implement a class ClassRoom with a constructor that accepts maxStudentsSize.

File: 0-classroom.js


1. Let's make some classrooms

Implement a function initializeRooms that returns an array of ClassRoom objects.

File: 1-make_classrooms.js


2. A Course, Getters, and Setters

Implement a class HolbertonCourse with getters and setters for name, length, and students.

File: 2-hbtn_course.js


3. Methods, static methods, computed methods names..... MONEY

Implement a class Currency with a displayFullCurrency method.

File: 3-currency.js


4. Pricing

Implement a class Pricing with a static method convertPrice.

File: 4-pricing.js


5. A Building

Create an abstract class Building and implement the evacuationWarningMessage method in subclasses.

File: 5-building.js


6. Inheritance

Extend Building with a class SkyHighBuilding and override the evacuationWarningMessage method.

File: 6-sky_high.js


7. Airport

Implement a class Airport with a custom toString method.

File: 7-airport.js


8. Primitive - Holberton Class

Implement a class HolbertonClass that returns its size when cast to a number and its location when cast to a string.

File: 8-hbtn_class.js


9. Hoisting

Fix and implement the HolbertonClass and StudentHolberton classes.

File: 9-hoisting.js


10. Vroom

Implement a Car class with a cloneCar method using ES6 symbols.

File: 10-car.js


Testing

Run the tests using:


npm run test

To check the linting and tests simultaneously:


npm run full-test

Repository

GitHub Repository: alx-frontend-javascript

Directory: 0x02-ES6_classes



---

© 2024 ALX, All rights reserved.


