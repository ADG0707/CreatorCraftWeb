const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'eu01-sql.pebblehost.com',
  user: 'customer_636493_website',
  password: 'TgX42&j!!!!',
  database: 'customer_636493_website',
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// Example API endpoint to fetch data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
