

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to Applicant-Signup Database (Primary)
mongoose.connect('mongodb://localhost:27017/Applicant-Signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Applicant-Signup Database'))
  .catch((err) => console.error('Error connecting to Applicant-Signup Database:', err));

// Define Applicant model
const Applicant = mongoose.model('applicant', new mongoose.Schema({
  number: { type: String, required: true },
  password: { type: String, required: true },
}));

// POST route to handle applicant signup
app.post('/applicant-signup', async (req, res) => {
  const { number, password } = req.body;

  if (!number || !password) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  try {
    const existingApplicant = await Applicant.findOne({ number });
    if (existingApplicant) {
      return res.status(400).json({ message: 'Applicant already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newApplicant = new Applicant({ number, password: hashedPassword });
    await newApplicant.save();

    res.status(200).json({ message: 'Applicant registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST route to handle applicant login
app.post('/applicant-login', async (req, res) => {
  const { number, password } = req.body;

  if (!number || !password) {
    return res.status(400).json({ message: 'Please provide all fields' });
  }

  try {
    const applicant = await Applicant.findOne({ number });
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }

    const isMatch = await bcrypt.compare(password, applicant.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Connect to Company-Signup Database (Secondary) using mongoose.createConnection
const companyDb = mongoose.createConnection('mongodb://localhost:27017/Company-signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events for the company database
companyDb.on('connected', () => {
  console.log('Connected to Company-signup Database');
});

companyDb.on('error', (err) => {
  console.error('Error connecting to Company-signup Database:', err);
});

// Define company schema and model using the separate connection
const companySchema = new mongoose.Schema({
  name: String,
  location: String,
  number: String, 
  password: String, 
});

const Company = companyDb.model('Company', companySchema);

// POST route for company signup
app.post("/company-signup", async (req, res) => {
  const { companyName, location, number, password } = req.body;

  try {
    
    if (!/^\d{12}$/.test(number)) {
      return res.status(400).json({ message: "Invalid number format" });
    }

    // Check if company already exists
    const existingCompany = await Company.findOne({ number });
    if (existingCompany) {
      return res.status(400).json({ message: "Company already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new company
    const newCompany = new Company({
      name: companyName,
      location: location,
      number,
      password: hashedPassword,
    });
    await newCompany.save();

    res.json({ message: "Company registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST route for company login
app.post('/company-login', async (req, res) => {
  const { number, password } = req.body;

  try {
    const company = await Company.findOne({ number });
    if (!company) {
      return res.status(400).json({ message: "Company not found" });
    }

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(5002, () => {
  console.log('Server is running on http://localhost:5002');
});
