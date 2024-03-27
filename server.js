const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/user');
const { Thought } = require('./models/thought');
const userController = require('./controllers/userController');
const thoughtController = require('./controllers/thoughtController');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Routes for users
app.get('/api/users', userController.getAllUsers);
app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.createUser);
app.put('/api/users/:id', userController.updateUser);
app.delete('/api/users/:id', userController.deleteUser);

// Routes for thoughts
app.get('/api/thoughts', thoughtController.getAllThoughts);
app.get('/api/thoughts/:id', thoughtController.getThoughtById);
app.post('/api/thoughts', thoughtController.createThought);
app.put('/api/thoughts/:id', thoughtController.updateThought);
app.delete('/api/thoughts/:id', thoughtController.deleteThought);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
