# Pet Sitter's API

Express API Exercise.

## Set-Up
1. Clone down this repo and `cd` into the directory.
2. Run `npm i` to install dependencies.
3. Run `node server.js` to run the API locally.
4. Navigate to http://localhost:3001/ in your browser to view API.

## Endpoints

| Method | Endpoint | Required Properties for Request | Sample Successful Response |
--- | --- | --- | ---
`GET` | `'/api/v1/pets'` | n/a | `[{id: 1, name: 'Doc', type: 'cat', breed: 'Domestic Short Hair', age: 2, food: 'Royal Canin\'s Urinary SO', medicine: 'N/A', favoriteToy: 'twist tie', favoriteTreat: 'Greenies', notes: 'Loves playing fetch'}, ...]`
`GET` | `'/api/v1/pets/:id'` | n/a | `{id: 1, name: 'Doc', type: 'cat', breed: 'Domestic Short Hair', age: 2, food: 'Royal Canin\'s Urinary SO', medicine: 'N/A', favoriteToy: 'twist tie', favoriteTreat: 'Greenies', notes: 'Loves playing fetch'}`
`POST` | `'/api/v1/pets'` | `{id: <number>, name: <string>, type: <string>, breed: <string>, age: <number>}` | `{id: <number>, name: <string>, type: <string>, breed: <string>, age: <number>}`
`DELETE` | `'/api/v1/pets/:id'` | `{id: <number>}` | `{message: 'Pet with id: <id> has been successfully deleted.'}`
`PATCH` | `'/api/v1/pets/:id'` | `{name: <string>}` | `{id: <id>, name: <string>, type: <string>, breed: <string>, age: <number>, food: <string>, medicine: <string>, favoriteToy: <string>, favoriteTreat: <string>, notes: <string>}`
