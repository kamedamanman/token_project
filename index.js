const express = require('express');
const app = express();
const PORT = 3000;

app.get('/token', (req, res) => {
    res.json({ token: 'your_generated_token' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
