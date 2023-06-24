const express = require('express');
const app = express();
const pets = require('./data.js');

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Pet Sitter\'s API';

app.locals.pets = pets;

app.get('/', (request, response) => {
  response.send('Oh hey Pet Sitter');
});

// GET all pets
app.get('/api/v1/pets', (request, response) => {
  response.json(pets);
})

// GET specific pet by id
app.get('/api/v1/pets/:id', (request, response) => {
  const { id } = request.params;
  const pet = pets.find(pet => pet.id === parseInt(id));

  !pet ? response.sendStatus(404) : response.status(200).json(pet);
})

// POST
app.post('/api/v1/pets', (request, response) => {
  const id = Date.now();
  const { name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes } = request.body;

  pets.push({ id, name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes });

  response.status(201).json({ id, name, type, breed, age, food, medicine, favoriteToy, favoriteTreat, notes})
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})