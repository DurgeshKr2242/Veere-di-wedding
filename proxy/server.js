const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;
// Your existing Google Apps Script deployment URL:
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxvuSVxOF42V5yNwib4ZfAM_psQ212-hvv_QuHq1EYQ7FD2g6ce2Lxuw5LfN650d9ew/exec';

// Parse application/x-www-form-urlencoded and JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set CORS headers for all incoming requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Respond immediately to OPTIONS requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.post('/rsvp', async (req, res) => {
  try {
    // Convert the incoming body to a URL-encoded string
    const params = new URLSearchParams(req.body).toString();

    // Forward the request to the Google Apps Script endpoint
    const response = await axios.post(GOOGLE_SCRIPT_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Return the response from the Apps Script to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding request:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to forward request.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
