const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config.json');
const port = process.env.PORT || config.port;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use((err, req, res, next) => {
  res.status(400).json({ error: 'Invalid request payload' });
});

/* Only With Send */
app.get('/', (req, res) => {
  res.send({status: 200, result: {name: 'node is woring...'}});
});

/* with status and json */
app.post('/', (req, res) => {
  res.status(200).json({name: 'postResult...'});
});

/* with status and json */
app.post('/name', (req,  res) => {
  res.status(200).json({name: 'post with status and json....'});
});

/* Normal api router */
app.use('/api/users', require('./router/api')); 

/* Student routes */
app.use('/api/student', require('./router/student/student'));

/* Employee routes */
app.use('/api/employee', require('./router/employee/employee'));

app.listen(port,()=>{
    console.log(`application is running at ${port} port`);
});