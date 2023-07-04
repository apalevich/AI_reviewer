/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');
const cors = require('cors');
// const history = require('connect-history-api-fallback');

const app = express();
app.use(express.json());
// app.use(history());
app.use(
  cors({
    origin: 'http://localhost:8080' // Allow requests from this origin
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
    console.error('error:', error);
    res.status(500).json(error);
  }
});

app.get('/getcontent/:owner/:repo/', async (req, res) => {
  const { owner, repo } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/contents`);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error('error:', error);

    res.status(500).json(error);
  }
});

app.get('/getfile/:owner/:repo/:file', async (req, res) => {
  const { owner, repo, file } = req.params;
  try {
    let url = `${BASE_URL}/repos/${owner}/${repo}/contents/${file}`;

    const response = await axios.get(url);
    const data = response.data;

    res.json(atob(data.content));
  } catch (error) {
    console.error('error:', error);
    res.status(500).json(error);
  }
})

async function makeRequest(url) {
  // TODO: write abstract finction to make Axios request to the GH API
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
