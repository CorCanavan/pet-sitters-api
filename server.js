const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pet Sitter\'s API';

app.get('/', (request, response) => {
  response.send('Oh hey Pet Sitter');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
})