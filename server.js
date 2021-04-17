// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()
var cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:liuxiao123@cluster0.nqnao.mongodb.net/data?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)


app.listen(process.env.PORT || 4000)