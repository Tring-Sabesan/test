const { postgraphile } = require('postgraphile');
const express = require('express');
const { Pool } = require('pg');

const app = express();

// Connect to PostgreSQL database
const pool = new Pool({
  connectionString: 'postgres://postgres:9865@localhost:5433/todoapp',
});

app.use(
  postgraphile(pool, 'public', {
    graphiql: true,
    enhanceGraphiql: true,
    subscriptions: true, // Enable subscriptions
    simpleSubscriptions: true, // Use simple (in-memory) subscriptions handler
    watchPg: true, // Automatically watch for schema changes
    retryOnInitFail:false
  })
);



// Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
