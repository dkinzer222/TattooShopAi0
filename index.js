const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Example route to handle API requests (e.g., booking appointments)
app.post('/api/book', (req, res) => {
  const { client_name, start_time, end_time, artist_email } = req.body;
  res.json({ message: `Appointment booked for ${client_name} with ${artist_email}` });
});

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});