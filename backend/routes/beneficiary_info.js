const express = require('express');
const router = express.Router();
const db = require('../db'); // Import your database connection

// Fetch all beneficiaries
router.get('/beneficiary_info', (req, res) => {
  db.query('SELECT * FROM immigration.beneficiary_info', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Add a new beneficiary
router.post('/beneficiary_info', (req, res) => {
  const { anum, country, province, nationality } = req.body;
  const query = 'INSERT INTO beneficiary_info (anum, country, province, nationality) VALUES (?, ?, ?, ?)';
  const values = [anum, country, province, nationality];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ id: result.insertId });
    }
  });
});

module.exports = router 