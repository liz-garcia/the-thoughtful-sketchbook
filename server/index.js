const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Tell express to use the json middleware
// app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

// Serve static files from the client
app.use(express.static(path.join(__dirname, '../client/dist')));

// * Endpoint to serve a simple message
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
