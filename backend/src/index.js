import express from "express";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json());

const db = new sqlite3.Database(process.env.DB_PATH);

db.run(`
  CREATE TABLE IF NOT EXISTS health (
    id INTEGER PRIMARY KEY,
    status TEXT
  )
`);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
