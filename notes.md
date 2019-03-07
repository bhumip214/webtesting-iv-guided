# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

window => global

cross-env => npx package used to abstract away OS differences setting env vars

DB_ENV=testing => settng environment to testing

npx knex migrate:latest --env=testing => to create test database from knexfile.js
