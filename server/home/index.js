// Import required modules
import mysql from 'mysql2';
import  express from 'express';
import cosrs from 'cors';

// Create an Express application
const app = express();
const port = 5000;

// Create a MySQL connection pool (replace with your own database configuration)
const db = mysql.createPool({
    host:"localhost",
    database: "shop_wave_db",
    user:'root',
    password: "200406KH30TARIK"
});


app.use(cosrs());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Define a route to fetch all categories
app.get('/categories', (req, res) => {
  const sql_query = 'SELECT name FROM categories';

  // Execute the SQL query
  db.query(sql_query, (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'An error occurred while fetching categories.' });
    } else {
      const categories = result.map(row => row.name);
      res.json(categories);
    }
  });
});


app.get('/products', (req, res) => {
  const { limit = 12, sort = 'desc', category } = req.query;
  let sql = `SELECT title, price, C.name AS category, description, image FROM product AS P
                INNER JOIN categories AS C ON C.category_id = P.category
`;

if (category !== "all") {
  // Use a placeholder for the category value
  sql += ` where category in (select category_id from categories where name = ?) `;
}

sql += ` ORDER BY id ${sort === 'desc' ? 'DESC' : 'ASC'}`;
sql += ` LIMIT ${parseInt(limit)}`;

// Define an array of parameters for the query
const params = [];

if (category !== "all") {
  params.push(category);
}

db.query(sql, params, (err, results) => {
  if (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  } else {
    res.json(results);
  }
});
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
