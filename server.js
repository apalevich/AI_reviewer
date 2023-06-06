/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173' // Allow requests from this origin
    })
);

const PORT = 8000;
const BASE_URL = 'https://api.github.com';

app.get('/getrepo/:owner/:repo', async (req, res) => {
    const { owner, repo } = req.params;
    try {
        const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('error');
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
