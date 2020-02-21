const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { test } = require('./src/routes/routes');
const app = express();

app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3000)

app.get('/', test.get)
app.post('/', test.post)

app.listen(app.get('port'), () =>  console.log('server on'));