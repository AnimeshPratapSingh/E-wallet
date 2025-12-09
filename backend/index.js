// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

// Use the API prefix '/api' instead of '/api/v1' if your routes expect that
app.use("/api", rootRouter);

// Root route to test server is running
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

