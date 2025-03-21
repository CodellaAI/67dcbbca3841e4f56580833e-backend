
const express = require('express');
const Entry = require('../models/Entry');

const router = express.Router();

// POST - Create a new entry
router.post('/entries', async (req, res) => {
  try {
    // Create a new entry with timestamp
    const newEntry = new Entry({
      timestamp: new Date(),
      info: 'Button clicked'
    });

    // Save to database
    await newEntry.save();

    // Send success response
    res.status(201).json({ 
      message: 'Entry created successfully',
      entry: newEntry
    });
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ message: 'Failed to create entry' });
  }
});

// GET - Retrieve all entries (optional, for testing)
router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ timestamp: -1 });
    res.status(200).json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Failed to fetch entries' });
  }
});

module.exports = router;
