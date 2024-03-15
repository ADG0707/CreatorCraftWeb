
// Access command-line arguments
const args = process.argv.slice(2);

// Ensure that both name and message are provided
if (args.length < 2) {
  console.error('Usage: node sql.js <name> <message>');
  process.exit(1); // Exit the script with a non-zero exit code to indicate failure
}

// Extract name and message from command-line arguments
const name = args[0];
const message = args[1];




const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'TgX42&j!',
database: 'asql'
});
// connect to the MySQL database
connection.connect((error) => {
if (error) {
console.error('Error connecting to MySQL database:', error);
} else {
console.log('Connected to MySQL database!');
}
});


let sql =  `INSERT INTO \`messages\` ( \`Name\`, \`Message\`) VALUES ('${name}', '${Message}')`;;
connection.query(sql)





// Close the connection
connection.end((err) => {
if (err) {
console.error('Error closing connection: ' + err.stack);
return;
}
console.log('Connection closed');
});



