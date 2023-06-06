/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = 8000;
const BASE_URL = 'https://api.github.com';

app.get('/getrepo', async (req, res) => {
    try {
        const url = new URL(req.query.url);
        const [_, owner, repo] = url.pathname.split('/');;
        console.log(owner, repo);
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
