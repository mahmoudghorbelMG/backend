const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.BACKEND_PORT || 3000;
const version = process.env.VERSION || '1.0';
const color = process.env.COLOR || 'green';

// Enable CORS (for development purposes)
app.use(cors());

app.get('/', (req, res) => {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Construct the message with version, environment, random number.
  const message = `Hello from the backend (version: ${version}) running in environment (env: ${color})! Random Number: ${randomNumber}.`;

  res.send(message);
});

app.listen(port, () => {
  console.log(`Backend microservice listening at http://localhost:${port}`);
});
