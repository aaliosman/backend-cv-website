require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const UserRouter = require('./routers/userRoutes')
const CvInfoRouter = require('./routers/cvInfoRouters');

const port = process.env.PORT || 6001;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, '../dist'), { index: false }));

const db_url = `${process.env.DB_URL}/${process.env.DB_NAME}`

mongoose.connect(db_url).then((connection) => {
    console.log('connected with mongodb')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header
    (
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET")
    next();
});

app.use('/users', UserRouter)
app.use('/register', UserRouter)
app.use('/login', UserRouter)
app.use('/logout', UserRouter)

app.use('/cvs', CvInfoRouter)
app.use('/createcv', CvInfoRouter)


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
});


app.listen(port, () => {
    console.log('server listening on port ' + port);
});
