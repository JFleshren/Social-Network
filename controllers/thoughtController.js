const { Thought } = require('../models/thought');

// Controller function to get all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to get a single thought by _id
exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to create a new thought
exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to update a thought by _id
exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedThought);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to delete a thought by _id
exports.deleteThought = async (req, res) => {
  try {
    await Thought.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
