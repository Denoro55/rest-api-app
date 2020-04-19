const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// routes
const todoRoutes = require('./routes/todo');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
    res.sendFile('/index.html');
});

app.listen(PORT, () => {
    console.log('server is listening on port ', PORT);
});
