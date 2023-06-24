const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Pet Sitter\'s API';

app.locals.pets = [
  { id: 1, name: 'Doc', type: 'cat', breed: 'Domestic Short Hair', age: 2, food: 'Royal Canin\'s Urinary SO', medicine: 'N/A', favoriteToy: 'twist tie', favoriteTreat: 'Greenies', notes: 'Loves playing fetch' },
  { id: 2, name: 'Baba', type: 'dog', breed: 'Mixed', age: 16, food: 'Nulo', medicine: 'Glucosamine 2x a day', favoriteToy: 'squeaky llama', favoriteTreat: 'bully sticks', notes: 'Does not get along with other dogs!' },
  { id: 3, name: 'Darling', type: 'cat', breed: 'Domestic Short Hair', age: 14, food: 'Royal Canin Indoor 7+', medicine: 'Methimazole 2x a day', favoriteToy: 'ribbon', favoriteTreat: 'wet food', notes: 'Shy - wait for her to approach you' }
]

app.get('/', (request, response) => {
  response.send('Oh hey Pet Sitter');
});

// GET all pets
app.get('/api/v1/pets', (request, response) => {
  const { pets } = app.locals;
  response.json({ pets });
})

// GET specific pet by id
app.get('/api/v1/pets/:id', (request, response) => {
  const { id } = request.params;
  const pet = app.locals.pets.find(pet => pet.id === parseInt(id));

  !pet ? response.sendStatus(404) : response.status(200).json(pet);
})

// POST
app.post('/api/v1/pets', (request, response) => {
  const id = Date.now();
  const { name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes } = request.body;

  app.locals.pets.push({ id, name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes });

  response.status(201).json({ id, name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes})
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})