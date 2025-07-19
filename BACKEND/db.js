const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./rakshak.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS symptoms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    conditions TEXT
  )`);
});

module.exports = db;
