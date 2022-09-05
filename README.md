# Shortest Route Finder

An Angular app that uses Google's directions API to help you to find the shortest path between 27 (thats a Google limit 😕) waypoints.

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Setup

Inside of `index.html` replace `{{GOOGLE_MAPS_API_KEY}}` with your Google Maps API key.

The key should have access to `Maps JavaScript API` and `Directions API`.

**!Important!** remember to properly secure your API key to avoid costs associated with third-party use of the key.

Now run the following commands in the projects root directory.

```bash
npm install
ng serve --open
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
