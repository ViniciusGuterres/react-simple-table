const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Working');
});

usersRoutes(app);

app.listen(3010, () => {
    console.log('ok');
});
