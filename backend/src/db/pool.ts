import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(client => client.release())
  .catch(err => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });

export { pool };
