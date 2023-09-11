const express = require('express');
const cors = require('cors');
const beneficiariesRouter = require('./routes/beneficiary_info');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Use your beneficiaries API routes
app.use('/api', beneficiariesRouter);

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to your Express.js backend!'); // You can customize this message
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
