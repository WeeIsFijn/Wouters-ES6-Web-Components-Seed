Wouter's ES6-Webcomponents Seed
====================================

My personal seed for ES6 projects, using SystemJS, Traceur, Web Components (and webcomponent.js as a polyfill) and finally Karma and Jasmine as test runners.

## Installation and usage

There are no global dependencies, so installation can be done using:

  `$ npm install`

Build the project and start a livereload server using:

  `$ npm start`

Running all unit tests:

  `$ npm test`

## Issues
This thing is just a vet project, thus far from production-ready. Issues that should be addressed include (but probably arent going to be limited to :sob:):
- karma-phantomjs-launcher doesnt play nice with karma-systemjs
- I manually copy traceur and systemjs from bower_components to a vendor directory in the build folder. There should be a better way (wiredep).
- webcomponents.js is not loaded via SystemJS, but via a script tag in the html. Which is ugly.
