// Import necessary libraries
const { validationResult } = require('express-validator');

// Create a custom middleware for validation using express-validator library
const validator = (req, res, next) => {
const errors = validationResult(req);

if (!errors.isEmpty()) {
return res.status(400).json({ errors: errors.array() });
}

next();
};

// Export the validator middleware function
module.exports = validator;