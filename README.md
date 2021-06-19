# MOP-Test-Cypress

## Usage

### Install deps
`npm install`
### Run with chrome UI or headless
`npm run  cy:run` OR `npm run  cy:run:headless`

To run in different environment override BASE_URL like this
`CYPRESS_BASE_URL=http://localhost:8000 npm run  cy:run:headless`

### Continuous integratio setup

To run these tests in your deployment pipeline run following
```
    npm install
    CYPRESS_BASE_URL={YOUR APP URL} npm run  cy:run:headless
```