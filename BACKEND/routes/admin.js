const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { symptom } = req.body;
  db.get("SELECT conditions FROM symptoms WHERE name = ?", [symptom.toLowerCase()], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (row) {
      return res.json({ possible_conditions: JSON.parse(row.conditions) });
    } else {
      return res.json({ possible_conditions: ["Unknown condition. Consult a doctor."] });
    }
  });
});

module.exports = router;
