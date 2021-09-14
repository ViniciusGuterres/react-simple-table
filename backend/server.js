const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const cors = require('cors');
const requestIp = require('request-ip')

const model = require('./model/logs');

app.use(cors());

app.use(getUserLogs);

app.get('/', (req, res) => {

    res.send('Working');
});

app.get('/test', (req, res) => {

    res.send('test');
});

usersRoutes(app);

app.listen(3010, () => {
    console.log('ok');
});

function getUserLogs(req, res, next) {

    // handle with date, convert to timestamp
    const ts = Date.now();

    const dateObj = new Date(ts);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    const hours = dateObj.getHours();
    const min = dateObj.getMinutes();
    const sec = dateObj.getSeconds();
    const tsDate = `${year}-${month}-${date} ${hours}:${min}:${sec}`

    // handle with ip address
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
    }
 
    if (ip.substr(0, 2) == '::') {
        ip = 'localhost'
    }

    model.logs(
        req.ip = ip, 
        req.agent = req.get('User-Agent'),
        req.date = tsDate, 
        req.path = req.originalUrl
    );

    next();
};