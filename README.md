# Angular 10 Firebase Admin Template

A general template project styled with Angular Material for use as a base to build management/admin-type interfaces with a Firebase backend. The aim is to have all the necessary modules and plugins pre-installed to avoid repetitive and time-consuming setup steps each time a new project is created.

## Features

- Angular Material dashboard with sidebar layout
- Email/password authentication with Firebase
- Authentication UI provided by [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui) - feature-rich; easy to adapt and customise
- Authentication guard usage on `home` and `component1`
- Firebase plugins pre-installed for utilising Firestore, Cloud Store, Cloud Messaging etc.

## Setup

### Prerequisites
- Node.js v12+
- npm
- Angular CLI v10

### Steps

1. Clone the repo and install node modules:
```bash
git clone https://github.com/fpervaiz/Angular10-Firebase-AdminTemplate.git && cd Angular10-Firebase-AdminTemplate
npm i
```
1. Set up a new project at firebase.google.com and create a new web app. Insert the generated Firebase configuration into `src/app/environment.ts`.
1. Go to Firebase Console > Authentication, and set up a user with an email address & password for testing.
1. Start the dev server:
```bash
ng serve --open
```

***
## Angular Default Instructions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
