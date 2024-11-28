import express from "express";
// import mysql from "mysql";
import mysql from "mysql2"; // Use mysql2 for better compatibility
import cors from "cors";

const app = express();
app.use(cors());
// this is to allow us to be able to get data from the client side
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Disco51423", // Add your MySQL password
  database: "test",
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to the MySQL database!");
});

// Routes
app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/book", (req, res) => {
  const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// delete
app.delete("/delete/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been deleted successfully");
  });
});
// update

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title` = ?, `desc`= ?,`price`= ?, `cover`= ? WHERE id = ? ";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated successfully");
  });
});

// Start the server
app.listen(8000, () => {
  console.log("connected to the backend");
});
