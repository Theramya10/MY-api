const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: "Hello from Ramya! Top 1% DevOps Engineer." });
});

app.listen(port, () => {
  console.log(`Application running securely on port ${port}`);
});