# local-tests
This is an example of end-to-end tests project for [PASV](https://pasv.us), the web app is [Local Coding](https://localcoding.us).

## Requirements
[Node.js](https://nodejs.org) (v.18+)

## Project setup
Just follow these steps to get started:
* `npm i` - install dependencies,
* create `cypress.env.json` in the root of the project - take `example.env.json` as an example,
* update `cypress.env.json` with your own data (email, password and etc.).

## Running project

To run tests in headless mode, simply execute:
```
npm run cy:run
```

To debug your tests (or add/update some), use:
```
npm run cy:open
```
This command will open a Cypress dashboard and allow you to observe tests that you run (including all the logs). 
